/*-------------------------------------------------------------------------------------------------------------
                                    CREATING INNGEST FUNCTION

- In this file, we will create our fist inngest function. named helloWorld
    - In the function triggering event is `test/hello.world`
    - It will sleep for one second and return back a message, for now
    - One way to test immediately is to go inside the inngest server

- Once you setup and register a function, you can restart both the inngest server and the app to get to the dashboard
    - There you should get the auto-detected tag 
    - And under the functions tab, there will be our function
    - There you can invoke the function
    - use {
        "data" : { "bussiness@codewithyagyesh.com" }
    }
    - And invoke it, this will wait for a moment and sent the data we structured here in return statememt

- We have tested the helloWorld function earlier in previous commit
    - Here now we will go for demoGenerate fucntion

- we came here from `firecrawl.ts` file to update this function  
    - Meaning, we'll allow this background job to extract the URL from our prompt
    - This will be done by using scrape function of firecrawl
    - But first we need to extract the URL from the prompt
    - Bcoz, that's how firecrawl API accepts data

- GOTO notes.md file, once firecrawl webscaping is setup

- In this section, we will create a background job in this function
    - For error tracking
    - As demoError()
    - In order to make it function properly, we need to go into `/src/app/api/inngest/route.ts` file
        - And register this function there

- After telemetry is added in `src/app/api/demo/blocking/route.ts` file, we will come back here
    - And we will add telemetry here as well
    - After the generate text
    - GOTO notes.md file
--------------------------------------------------------------------------------------------------------------*/
import { google } from "@ai-sdk/google";
import { inngest } from "./client";
import { generateText } from "ai";
import { firecrawl } from "@/lib/firecrawl";

// export const helloWorld = inngest.createFunction(
//     { id: "hello-world" },
//     { event: "test/hello.world" },
//     async ({ event, step }) => {
//         await step.sleep("wait-a-moment", "1s");
//         return{ message: `Hello ${event.data.email}!` };
//     },
// );

// before going to top, GOTO `src/app/api/inngest/routes.ts` to setup a new function


const URL_REGEX = /https?:\/\/[^\s]+/g;

// Going for demoGenerate function
export const demoGenerate = inngest.createFunction(
    { id: "demo-generate" },
    { event: "demo/generate" },
    async ({ event, step }) => {

        const { prompt } = event.data as { prompt: string };

        // Extract all URLs from users query
        const urls = await step.run("extract-urls", async () => {
            return prompt.match(URL_REGEX) ?? [];
        }) as string[];

        // scrape the content using firecrawl
        const scrapedContent = await step.run("scrape-url", async () => {
            const results = await Promise.all(
                urls.map(async (url) => {
                    const result = await firecrawl.scrape(
                        url,
                        { formats: ["markdown"] },
                    );
                    return result.markdown ?? null;
                })
            );
            return results.filter(Boolean).join("\n\n");
        });

        // generating final prompt
        const finalPrompt = scrapedContent ? `Context:\n${scrapedContent}\n\nQuestion: ${prompt}` : prompt;

        const result = await step.run("generate-text", async () => {
            return await generateText({
                model: google('gemini-2.5-flash'),
                prompt: finalPrompt,

                // Paste the telemetry here
                experimental_telemetry: {
                    isEnabled: true,
                    recordInputs: true,
                    recordOutputs: true,
                } // comment it out if depricated
            });
        })
    },
);
// GOTO `src/app/api/inngest/route.ts` file to change


export const demoError = inngest.createFunction(
    { id: "demo-error" },
    { event: "demo/error" },
    async ({ event, step }) => {
        await step.run("throw-error", async () => {
            throw new Error("Inngest error: Something went wrong in the background job!");
        });
    }
)