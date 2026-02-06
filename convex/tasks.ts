/*-----------------------------------------------------------------------------------------
                                Exposing a databse query
                            
- Here in this file, paste the code mentioned with the `Expose a database query` point in convex database documentation
- Make sure you have successfully established a connection, created an account, and an app in convex website
- Make sure `npx convex dev` is running
- Once it is done, this can be tested
    - Head over to the workbench in Convex website, there in the 
    - Functions tab, you can access this function as `tasks:get` 
    - You can run this via the dashboard
    
- In order for the get function to throw error, it needs to have a schema
    - Which we do not have at this moment

- To test this in our app, we need a ConvexClientProvider.tsx file
    - GOTO notes.md for that part






-----------------------------------------------------------------------------------------*/

// import { query } from "./_generated/server";

// export const get = query({
//   args: {},
//   handler: async (ctx) => {
//     return await ctx.db.query("").collect();
//   },
// });