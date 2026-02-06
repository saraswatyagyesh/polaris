/*----------------------------------------------------------------------------------------------------
                                                SETTING UP UN-AUTHENTICATED VIEW
                                            
- Here we will code
    - What to show to un-authenticated users

- After adding ItemDescription, head to providers.tsx to render this <UnauthenticatedView />
    - GOTO notes.md once it is done, to setup AuthLoadingView



-----------------------------------------------------------------------------------------------------*/

import { ShieldAlertIcon } from "lucide-react";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";


export const UnauthenticatedView = () => {
        // This will purely be a presentational component
        return (
            <div className="flex, items-center justify-center h-scren bg-background">
                <Item variant="outline">
                    <ItemMedia variant="icon">
                        <ShieldAlertIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Unauthenticated View</ItemTitle>
                        <ItemDescription>
                            You are not authorized to access this resource.
                        </ItemDescription>

                    </ItemContent>

                    <ItemActions>
                        <SignInButton>
                            <Button variant="outline" size="sm">
                                Sign In
                            </Button>
                        </SignInButton>
                    </ItemActions>
                </Item>
            </div>
        );
};