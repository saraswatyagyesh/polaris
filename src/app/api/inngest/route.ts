/*----------------------------------------------------------------------------------------------------
                                            SETTING UP INNGEST ENPOINT ROUTE

- We have came here from src/inngest/client.tsx file to setup an API route fot inngest to hit on




----------------------------------------------------------------------------------------------------*/

import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";

// create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client:inngest,
    functions: [
        /* Your function will be passed here later */
    ]
})