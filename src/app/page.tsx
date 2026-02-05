/* ------------------------------------------------------------------------------

- Remove everything that was originally in this file.


- Some important notes about this file:
  - page.tsx is a special file in Next.js that represents a route in your application.
  - You have to `export default` here

- Once we understood the export default requirement, lets check for tailwind now

------------------------------------------------------------------------------ */


/*-----------------------------------------------------------------------------

                        TEST CODE FOR TAILWIND SETUP

import App from "next/app";

// In order to make this file work, you need to do this
const X = () => {
  return (
    // Checking for tailwind setup
    // Make sure to save the file
    <div className="text-red-500">
      Hello World
    </div>
  );
};

// export default is mandatory for page.tsx files
export default X;

// - Now you can shutdown your app
//   - Now we will install and configure shadcn/ui
//   - GOTO notes.md for shadcn/ui

------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------

                        TEST CODE FOR SHADCN/UI

- Now that we have installed all shadcn components, we can try them out here
- one thing you will notice is that it will change the backgrouund to white
- Now that we have the button component we can play with it
  - <Button> has fields like variant, size, disabled, onClick etc
  - with <Button variant="destructive"> it will change the color to red
  - You can cntr+click the button to go to the code file
    - There you can modify the code and see the changes
    - This is what it means to personalize the code
    - You can also try other variants like outline, ghost etc
    - Go ahead and try changing CSS of the button component code


------------------------------------------------------------------------------*/

import { Button } from "@/components/ui/button";

const X = () => {
  return (
    <div>
      <Button variant="destructive">
        Click me
      </Button>
    </div>
  );
};

export default X;

// make sure to save this file and run the app
// Since this will appear in light mode, we need to hardcode it to dark mode
// GOTO notes.md for dark mode

