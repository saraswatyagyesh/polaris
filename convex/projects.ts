/*---------------------------------------------------------------------------------------------------
                                            SETTING UP PROJECTS.TS FILE

- For now you can harcode the ownerId as 123
    - Later we will use CLERK to extract the user's ID


- After completing this here, make sure to change the tasks to projets in `app/page.tsx` and `app/layout.tsx`

- We have created a UI for the providers in providers.tsx, here we will learn to use Clerk's authentication in convex provider now
    - We will try to extract current user, in the get
    - Once identity is established in both create and get, head over to providers.tsx to setup Unauthorized view   

- We're in Projects section, came here from schema.ts file
    - Then we want to abstract the authentication from this file because we'll be using it a lot
    - CREATE & GOTO `/convex/auth.ts` file

----------------------------------------------------------------------------------------------------*/
import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { verifyAuth } from "./auth";

export const create = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await verifyAuth(ctx);


        // [PROJECT BRANCH]
        // await ctx.db.insert("projects", {
        //     name: args.name,
        //     ownerId: identity?.subject,
        // });
        const projectId = await ctx.db.insert("projects", {
            name: args.name,
            ownerId: identity.subject,
            updatedAt: Date.now(),
        });
        return projectId;
    },
});

export const getPartial = query({
    args: {
        limit: v.number()
    },
    handler: async (ctx, args) => {
        // extracting user
        const identity = await verifyAuth(ctx);

        // returning a query that show projects of the loggedIn user only
        return await ctx.db
        .query("projects")
        .withIndex("by_owner", (q) => q.eq("ownerId", identity.subject))
        .take(args.limit);
    },
});

export const get = query({
    args: {},
    handler: async (ctx) => {
        // extracting user
        const identity = await verifyAuth(ctx);

        // returning a query that show projects of the loggedIn user only
        return await ctx.db
        .query("projects")
        .withIndex("by_owner", (q) => q.eq("ownerId", identity.subject))
        .collect();
    },
});