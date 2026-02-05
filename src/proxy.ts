/*--------------------------------------------------------------------------------
                                        ADDING CLERK MIDDLEWARE IN APP ROUTE

- The name of this file as middleware.ts could work, but it will give warninigs
- I will now head over to clerk middleware docs and copy paste the code here
-






----------------------------------------------------------------------------------*/

// code from clerk middleware docs for app router
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
