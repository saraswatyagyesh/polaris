/*------------------------------------------------------------------------------------------------
                                                    SETTING UP CONVEX CLIENT PROVIDER

- Simply paste the code mentioned in the documentation, to setup the client provider
- Once it is ready, let's add it in the layout, which is the next step
- GOTO notes.md for this






------------------------------------------------------------------------------------------------*/

"use client"; // to make this a client component

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";


// make sure you have the NEXT_PUBLIC_CONVEX_URL variable in local env file
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}