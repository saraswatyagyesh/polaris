/*-----------------------------------------------------------------------------------------------
                                            SETTING UP A BLOCKING API ROUTE

- Here we will setup the api/demo/blocking route
- And the googl'e AI will be used at this endpoint
- This will not work, unless API key is not saved
    - For that, go to google's AI studio website, and in there you can create one free API 
    - Simply just create a new project with name of this project, and copy paste the key in .env.local file and use the ENV vars 
    - One way to directly add it is written below 

- Then we will create a /src/app/demo folder and a page.tsx file in it
    - GOTO demo/page.tsx

    
-----------------------------------------------------------------------------------------------*/
import { generateText } from "ai";
import { google } from "@ai-sdk/google"; // comment it our for NON env var part
// import { createGoogleGenerativeAI } from "@ai-sdk/google";

// const google = createGoogleGenerativeAI({
//     apiKey: "API KEY",
// }); 


export async function POST() {
    const response = await generateText({
        model: google('gemini-2.5-flash'),
        prompt: 'Write a short story about a robot learning to paint',
    });

    return Response.json({ response });
};