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

--------------------------------------------------------------------------------------------------------------*/
import { google } from "@ai-sdk/google";
import { inngest } from "./client";
import { generateText } from "ai";

// export const helloWorld = inngest.createFunction(
//     { id: "hello-world" },
//     { event: "test/hello.world" },
//     async ({ event, step }) => {
//         await step.sleep("wait-a-moment", "1s");
//         return{ message: `Hello ${event.data.email}!` };
//     },
// );

// before going to top, GOTO `src/app/api/inngest/routes.ts` to setup a new function


// Going for demoGenerate function
export const demoGenerate = inngest.createFunction(
    { id: "demo-generate" },
    { event: "demo/generate" },
    async ({ step }) => {
        await step.run("generate-text", async() => {
            return await generateText({
                    model: google('gemini-2.5-flash'),
                    prompt: 'Write a summary of Three men in a boat',
                });
        })
    },
);
// GOTO `src/app/api/inngest/route.ts` file to change
