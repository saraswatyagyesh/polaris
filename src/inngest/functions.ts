/*-------------------------------------------------------------------------------------------------------------
                                    CREATING INNGEST FUNCTION

- In this file, we will create our fist inngest function. named helloWorld
    - In the function triggering event is `test/hello.world`
    - It will sleep for one second and return back a message, for now
    - One way to test immediately is to go inside the inngest server

- Once you setup and register a function, you can restart both the inngest server and the app to get to the dashboard
    - There you should get the auto-detected tag 
    - And under the functions tab, there will be our function

--------------------------------------------------------------------------------------------------------------*/
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        await step.sleep("wait-a-moment", "1s");
        return{ message: `Hello ${event.data.email}!` };
    },
);
// before going to top, GOTO `src/app/api/inngest/routes.ts` to setup a new function