/*---------------------------------------------------------------------------------------------------
                                            SETTING UP PROJECTS.TS FILE

- For now you can harcode the ownerId as 123
    - Later we will use CLERK to extract the user's ID


- After completing this here, make sure to change the tasks to projets in `app/page.tsx` and `app/layout.tsx`

- We have created a UI for the providers in providers.tsx, here we will learn to use Clerk's authentication in convex provider now
    - We will try to extract current user, in the get



----------------------------------------------------------------------------------------------------*/
import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const create = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("projects", {
            name: args.name,
            ownerId: "123",
        });
    },
});

export const get = query({
    args: {},
    handler: async (ctx) => {
        // extracting user
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }


        return await ctx.db.query("projects").collect();
    },
})