/*----------------------------------------------------------------------------------------------------
                                            SETTING UP INNGEST ENPOINT ROUTE

- We have came here from src/inngest/client.tsx file to setup an API route fot inngest to hit on

- FOR the DASHBOARD, 
    - After running this insacne, inngest will catch this, and
    - WE can see the `auto-detect` batch there.
    - But there will be a `zero function` error. which we are goin to do next
    - We will now create our very first function as `src/inngest/functions.ts` file
    - GOTO `src/inngest/functions.ts` file


----------------------------------------------------------------------------------------------------*/

// paste the content of documentation mentioned there for this file 
import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { helloWorld } from "@/inngest/functions";

// create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client:inngest,
    functions: [
        /* Your function will be passed here later */
        // We have come here from `src/inngest/functions.ts` file to register our function helloWorld
        helloWorld, // make sure to import it tooo
    ]
})
// After saving this, goto top to understand what will happen in the dashboard we got earlier