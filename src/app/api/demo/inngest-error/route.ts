/*------------------------------------------------------------------------------------------------------------
                                                INNGEST ERROR ROUTE

- Paste the following code below
- Once done, to create that background job, GOTO `/src/inngest/functions.ts` file



------------------------------------------------------------------------------------------------------------*/

import { inngest } from "@/inngest/client";

export async function POST() {
    await inngest.send({ name: "demo/error", data: {} });

    return Response.json({ status: "started" });
}

