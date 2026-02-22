"use client";

/*-----------------------------------------------------------------------------------------------------------------
                                            SETTING UP PAGE LAYOUT FOR GOOGLE AI

- We have came here from /blocking/routes.ts file and will create a UI for our Google AI here
- This will be the route localhost:3000/demo 
- The google provider often fails tho
- If you use the .env.local file to store the Google API key, you can direclt import google instead
- Now we wil use useState to show the blocking


- With blocking, when you will run the app
    - You will learn that it takes too much time to get the response back
    - And it get's over on refresh
    - What we want is to tell user, that we have started this job in the backgroun
    - And you can wait for it to complete, meanwhile do dome stuff
    - This can be done with Inngest
    - GOTO notes.md for further points


- When we will come from `background/rotue.ts` for non-blocking
    - We create handleBackground function below handleBlocking function
    - Make sure to set different loading states for Blocking and Background routes
    - This way you can understand working and difference btw blocking and non blocking aka background
    - With non blocking multiple background jobs can be triggered 
    - GOTO notes.md for further details about AgentKit


- In this chapter we will work on error tracking
    - We've come here to prepare for a scenario of client error
    - This error can happen due to various reasons
    - We'll add handleClientError() for that
    - Next we'll setup handleApiError() for API errors
    - In case of innngest error, it will successfully do a fetch error, but
        - Background job will throw an error
        - Scenario in handleInngestError()
    - When the error buttons are pressed only the client and us, in this demo only, will know that something is wrong in browser
    - In production, this will not be known to us
    - We need to be aware of all the errors that happen, 
        - Be it client side, server side, or background job
    - To demonstrate this error, we need to create `/app/api/demo/error/route.ts` file
    >- GOTO `src/app/api/demo/error/route.ts`
------------------------------------------------------------------------------------------------------------------*/

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DemoPage() {
    const [loadingBlocking, setLoadingBlocking] = useState(false);
    const [loadingBackground, setLoadingBackground] = useState(false);

    // create a handleBlocking function 
    const handleBlocking = async () => {
        setLoadingBlocking(true);
        await fetch("api/demo/blocking", { method: "POST" });
        setLoadingBlocking(false);
    };

    const handleBackground = async () => {
        setLoadingBackground(true);
        await fetch("/api/demo/background", { method: "POST" });
        setLoadingBackground(false);
    };

    // 1) Client error - throws in the browser
    const handleClientError = () => {
        throw new Error("Client error: Something went wrong in the browser!");
    };

    // 2) API error - trigger server-side error
    const handleApiError = async () => {
        await fetch("/api/demo/error", { method: "POST" });
    };

    // 3) Inngest error - triggers error in background job
    const handleInngestError = async () => {
        await fetch("/api/demo/inngest-error", { method: "POST" });
    };


    return (
        <div className="p-8 space-x-4">

            <Button disabled={loadingBlocking} onClick={handleBlocking}>
                {loadingBlocking ? "Loading..." : "Blocking"}
            </Button>

            <Button disabled={loadingBackground} onClick={handleBackground}>
                {loadingBackground ? "Loading..." : "Background"}
            </Button>

            {/* Setting up error handling buttons */}
            <Button variant="destructive" onClick={handleClientError}>Client Error</Button>

            <Button variant="destructive" onClick={handleApiError}>API Error</Button>

            <Button variant="destructive" onClick={handleInngestError}>Inngest Error</Button>

        </div>
    );
};

