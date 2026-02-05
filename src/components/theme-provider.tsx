/*---------------------------------------------------------------------------------------

                                HARDCODING DARK MODE USING NEXT-THEME

- In this file directly copy paste the following code
- In this code
    - use client turns this into client component, defaults are server components in app router
    - We export a function called ThemeProvider which propogates the props and renders the children as children
    - Once it is done GOTO src/app/layout.tsx

---------------------------------------------------------------------------------------*/
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}