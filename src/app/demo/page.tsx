"use client";

/*-----------------------------------------------------------------------------------------------------------------
                                            SETTING UP PAGE LAYOUT FOR GOOGLE AI

- We have came here from /blocking/routes.ts file and will create a UI for our Google AI here
- This will be the route localhost:3000/demo 
- The google provider often fails tho






------------------------------------------------------------------------------------------------------------------*/

import { Button } from "@/components/ui/button";

export default function DemoPage() {
    // create a handleBlocking function 
    const handleBlocking = async () => {
        await fetch("api/demo/blocking", {method: "POST"});
    };
    
    
    return (
        <div className="p-8 space-x-4">
            <Button onClick={handleBlocking}>
                Blocking
            </Button>
        </div>
    );
};

