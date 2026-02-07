/*-----------------------------------------------------------------------------------------------
                                            SETTING UP A NON-BLOCKING API ROUTE

- Now that we have the POST function, lets
    - GOTO `app/demo/page.tsx` file 
    - In there create a handleBackground function
-----------------------------------------------------------------------------------------------*/

import { inngest } from "@/inngest/client";

export async function POST() {
    await inngest.send({
        name: "demo/generate",
        data: {},
    });
    return Response.json({ status: "started" });
};