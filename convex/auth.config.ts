/*-------------------------------------------------------------------------------------
                                        SETTING UP AUTR CONFIG FOR CLERK AND CONVEX

- applicationID is set to convex bcoz that is what we set as the name in our CLERK JWT template

- We now need to configure ConvexProviderWithClerk 
    - GOTO notes.md to setup providers










--------------------------------------------------------------------------------------*/

import { AuthConfig } from "convex/server";

export default {
    providers: [
        {
            domain: process.env.CLERK_JWT_ISSUER_DOMAIN!,
            applicationID: "convex",
        },
    ],
} satisfies AuthConfig;