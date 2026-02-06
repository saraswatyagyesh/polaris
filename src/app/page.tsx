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


/*---------------------------------------------------------------------------------------------
                            SETTING UP CONVEX HERE

- We will use hooks within this file
  - To do so, we need to convert it to client component
- After writing `task.isCompleted` line
  - GOTO notes.md file coz we need schema


- There was "tasks" being used in place of "project/projects" keywords. So don't worry that much
  - That was just sandboxing

- [CONVEX] We need to protect the data access layer
  - coz, if someone bypasses. And through protecting each API route individually can we save this
  - It can be done using CLERK with CONVEX
  - GOTO notes.md for setting up CLERK with CONVEX

-----------------------------------------------------------------------------------------------*/
"use client";  // [CONVEX] changing it into client component


import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api"; // [CONVEX] this will give access to Typesafe f() that we developed

import { Button } from "@/components/ui/button";

const X = () => {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);
  
  
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => createProject({
        name: "New Project"
      })}>
        Add new
      </Button>



      {/* [CONVEX]: now we can iterate */}
      {projects?.map((project) => (
        <div className="border rounded p-2 flex flex-col" key={project._id}>
          <p>{project.name}</p>
          <p>Owner Id: {project.ownerId}</p>
        </div>
      ))}
    </div>
  );
};

export default X;

// make sure to save this file and run the app
// Since this will appear in light mode, we need to hardcode it to dark mode
// GOTO notes.md for dark mode

