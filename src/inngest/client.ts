/*------------------------------------------------------------------------------------------------------------------------------
                                                SETTING UP INNGEST CLIENT

- In this file we will setup inngest client for our project
- The npm --ignore command is not working, make sure to check for it in the inngest documentation

- okay, now create `src/app/api/inngest/route.ts` file and go there






------------------------------------------------------------------------------------------------------------------------------*/

import { Inngest } from "inngest";

// client to send and recieve emails
export const inngest = new Inngest ({ id: "polaris" });

// Register this to an API route
// make sure app is running
// The server we created earlier will start hitting bunch of endpoints
// it will hit at /api/inngest endpoint, is where we will register
// Create /app/api/inngest/route.ts file and HEAD over to it
// goto top to create the next file