/*--------------------------------------------------------------------------------
                                        ADDING CLERK MIDDLEWARE IN APP ROUTE

- The name of this file as middleware.ts could work, but it will give warninigs
- I will now head over to clerk middleware docs and copy paste the code here


- Now we will setup routes that allow certain access only






----------------------------------------------------------------------------------*/

// code from clerk middleware docs for app router
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// Rotues which are avaiable for user
const isPublicRoute = createRouteMatcher([
  "/api/inngest(.*)",
]);

// For everything else, we will redirect user away
export default clerkMiddleware(async (auth, req) => {
  if(!isPublicRoute(req)) {
    await auth.protect(); // This will lead user to sign in page
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
