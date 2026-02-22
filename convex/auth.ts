/*--------------------------------------------------------------------------------------------------------------
                                                            ABSTRACTING AUTH FROM CONVEX PROJECT.TS

- Came from /convex/projects.ts file







--------------------------------------------------------------------------------------------------------------*/

import { MutationCtx, QueryCtx } from "./_generated/server";

export const verifyAuth = async ( ctx: QueryCtx | MutationCtx ) => {

       const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        return identity;
};