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

------------------------------------------------------------------------------------------------------------------*/

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DemoPage() {
    const [loadingBlocking, setLoadingBlocking] = useState(false);
    const [loadingBackground, setLoadingBackground] = useState(false);

    // create a handleBlocking function 
    const handleBlocking = async () => {
        setLoadingBlocking(true);
        await fetch("api/demo/blocking", {method: "POST"});
        setLoadingBlocking(false);
    };

    const handleBackground = async () => {
        setLoadingBackground(true);
        await fetch("/api/demo/background", { method: "POST" });
        setLoadingBackground(false);
    };
    
    
    return (
        <div className="p-8 space-x-4">
            <Button disabled={loadingBlocking} onClick={handleBlocking}>
                {loadingBlocking ? "Loading..." : "Blocking"}
            </Button>
            <Button disabled={loadingBackground} onClick={handleBackground}>
                {loadingBackground ? "Loading..." : "Background"}
            </Button>
        </div> 
    );
};

