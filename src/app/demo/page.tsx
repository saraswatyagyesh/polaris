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


------------------------------------------------------------------------------------------------------------------*/

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DemoPage() {
    const [loading, setLoading] = useState(false);

    // create a handleBlocking function 
    const handleBlocking = async () => {
        setLoading(true);
        await fetch("api/demo/blocking", {method: "POST"});
        setLoading(false);
    };
    
    
    return (
        <div className="p-8 space-x-4">
            <Button disabled={loading} onClick={handleBlocking}>
                {loading ? "Loading..." : "Blocking"}
            </Button>
        </div> 
    );
};

