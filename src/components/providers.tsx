/*------------------------------------------------------------------------------------------------
                                                        SETTING UP PROVIDERS

- It will be a client side script, hence "use client"

- Once it is done, now let's wrap our app with this 

- GOTO src/app/layout.tsx






------------------------------------------------------------------------------------------------*/

"use client";

import { ClerkProvider, SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react";
import { ThemeProvider } from "@/components/theme-provider";
import { UnauthenticatedView } from "@/features/auth/components/unauthenticated-views";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                
                {/* - Add the ThemeProvider component around the child component here 
              - Now we have to add "suppressHydration" warning html tag above
              - Then we can set the theme to dark throgh ThemeProvider
              - This way in future you can change the theme to light or dark throgh the ThemeProvider component
              - Since we are in this layout file, let's modify fonts which are at top
                - This will however not change the font entirely, you have to modify the global.css file too
                - That you can do as homework

              - GOTO notes.md

              */}
                
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* MAKE SURE CLERK ENV VARS ARE ESTABLISHED IN .env.local FILE */}
                    <Authenticated>
                        <UserButton />
                        {children}
                    </Authenticated>
                    
                    {/* Once identity is setup in project.ts file, we can begin for Unauthenticated view here */}
                    <Unauthenticated>

                        {/* <SignInButton />
                        <SignUpButton /> */}
                        <UnauthenticatedView />
                    
                    </Unauthenticated>
                    <AuthLoading>
                        Auth Loading...
                    </AuthLoading>
                </ThemeProvider>

            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};
