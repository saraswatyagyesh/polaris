/*--------------------------------------------------------------------------------------------
                                            SETTING UP AUTH LOADING VIEW

- Here we will be creating an Auth loading view 
    - Once done, go to providers.tsx to import it in <AuthLoading>

--------------------------------------------------------------------------------------------*/

import { Spinner } from "@/components/ui/spinner";

export const AuthLoadingView = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <Spinner className="size-6 text-ring" />
        </div>
    )
};