import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/*-------------------------------------------------------------------

- This function may not seem that much interesting, but it will be used extensively
  - It will be used to safely merge or create conditional tailwind classes
  - This utility might sound simple but you can overwrite or do major changes if you do not understand tailwindCSS

- To know how to add components GOTO notes.md





-------------------------------------------------------------------*/




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
