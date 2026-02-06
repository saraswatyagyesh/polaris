# 1 Introduction

- Name of this clone is `polaris`
- It will have features like
    - Ghost text suggestion
    - AI agent that can create and modify your files
    - Live preview running entirely in browser
    - Full github integration

------------------------------------------------------------------------------
# 2 Setup

>- Initital setup
- In here our basic goal is to 
    - Initialize NextJS with typescript setup
    - Install and configure shadcn/ui components
    - Add a theme provider
    - Configure fonts and global CSS variabales`

- We will run `npx create-next-app@16.1.1 polaris` to create this project
    - Select `No` for React Compiler and import alias option
    - Once it is done, change the directoy in your terminal and go to the project directory
    - Then run `npm run dev` to run the project 

- To modify this project
    >- GOTO `src/app/page.tsx`


>- Installing `shadcn/ui`    
- For this,
    - check for version with `npx shadcn@latest --version`
    - But for this project install via `npx shadcn@3.6.2 init` command
    - After running this comand not much should change, other than folder structure. A file `components.json` will appear, having configs of all the things we selected 
    - There will be `src/lib/utils.ts` file 
    >- Go to `src/lib/utils.ts` 

>- Adding more components
- In order to add more components, 
    - Run `npx shadcn@3.6.2 add --all` command
    - This will modify the `gloabal.css` file too
    - At it's core shadcn is a collection of beautifully designed components which you can use to make your own custom component library
    >- To look for what shadcn will do open `src/components/ui` you will see various `.tsx` files 
    - These are the `source code` file of all the components, which you can than modify.
    - These components are ment to be modified according to your own need
    - It is like having an advanced CSS component toolkit, which you can personalise as you want
    - Let's try it out
        >- GOTO `src/app/page.tsx`


>- Hardcode the IDE for darkmode
- Now what if we want to `hardcode dark mode` in shadcn, for this
    - Inside the documentation of Shadcn you can find dark mode there
    - There it will tell to install `next-theme` via the `npm install next-theme` command under the root folder of your project
    - Once it is installed, you can create your own component in `src/component/theme-provider.tsx` file or you can also store it in separate directory under `/component` dir
    - The reason why it is not in `ui` folder is to separate it from shadcn components
    - `Suggestion` : Check for this code under the `dark-theme` tab inside the docs of Shadcn 
        - Here we use `"use client"` directive coz components are server components in App router
        - Then we made a component `ThemeProvider` which propogates the props `...props` and renders the children as children
        >- GOTO `src/components/theme-provider.tsx`


- Once you have the `ThemeProvider` component ready, 
    - Head over to `src/app/layout.tsx`
    - Same rules that apply on `page.tsx` - reserved file name, 
    - And file based routing works because a `default export` is mandatory in these files
    - Now inside the `RootLayout`export and below the `<body>` tag write `<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>{Children}</ThemeProvider>` line
    - And make sure you import the ThemeProvider which you created `import {ThemeProvider} from "@component/theme-provider";` 
    - Then update html tag as `<html lang="en" suppressHydrationWarning>`
    - Now after saving and refreshing the app, you'll get the dark mode


- After setting the `theme-provider` and `layout.tsx` our job is done for this section.
- Now that we are done with this chapter, push this repo to github
------------------------------------------------------------------------------
# 3 Authentication

- Now let's begin with authentication
- our objective is
    - Setup clerk account and sdk
    - configure authentication provider and middleware
    - create a signin and signup flows
    - build authenticated and unauthenticated views

- For this we will visit `cwa.run/clerk` and create an account there, then vist the dashboard
    - There, when you create an application, make sure that `email` option is ticked
    - Basically email option is needed in order for the clerk billing to work. THis is required
    - Another important one is `github` 
    - Why, because we are making an IDE 

- Then we will install clerk with the command, `npm install @clerk/nextjs@6.36.5` 
    - Then we will add the API keys in our `.env` file (`.env` is to be created at the root of the project folder)
    >- GOTO .env and paste the API keys in the .env file now 

- Now, we have to create `proxy.ts` (for NextJS v15, `middleware.ts`)
    - Creating this file also depends
        - If you have `src` folder then create `src/proxy.ts`
        - If not than create `root/proxy.ts` 
>- Depending on the above condition, in our case we will,
>- GOTO `src/proxy.ts`

- Now let's add a clerk provider, 
    - which is instructed in the documentation, to be done by editing `layout.tsx`
    >- GOTO `src/app/layout.tsx`
    - Now that we have setup the Signin, SignUp buttons. Let's do `npm run dev`
    - And yay, it is working !!!!!!!!!
    - MAKE SURE TO ADD THE API KEYS 
    - We can explore it more after we add convex database
    - Make sure you read the `clerk documentation`

------------------------------------------------------------------------------
# 4 Database setup

- In this section our goals are
    - Setup aconvex accout and project
    - install convex SDK and CLI tools
    - Create table with CRUD operations
    - Configure convex provider with clerk autentication

>- Let's visit the `Convex database website` 

- Convex will be used for our files and folder structure in browser
    - Simply create an account in Convex, add a new project with the name `Polaris`, then head over to documentaion
    - To install convex run `npm install convex@1.31.2` 
    - Once we have it installed, setup a convex dev deployment running `npx convex dev`
    - Once you run this command, you will have to login 
    - Then in terminal select the `existing project` option and choose `polaris` in it
    - After setup there will be a `/convex` folder and some changes to the `.env` file
    - And you will have `.env.local` file having the Convex credentials
    - For now you can move them to `.env` file
    - To check for whic env to use
        - Move content of `.env.local` to `.env` and run `npx convex dev` 
        - Delete `.env.local` and then run the command
        - If the command makes the `.env.local` file again,
        - Shift everything from `.env` to `.env.local` for now and remove `.env`

- We now have to create sample data
    - In the root, create `sampleData.jsonl` file and paste the sample data from documnetation
    - Then run `npx convex import --table tasks sampleData.jsonl`
    - Once this is done, we will expose a db query
        - That is fetch data from the database and display in our aap
        - We will create `convex/tasks.ts` file 
        >- GOTO `convex/tasks.ts` file

- Once the function is checked online in dashboard, we will now setup a `ConvexClientProvider.tsx` file
    - This will be created at `src/component/convex-client-provider.tsx` 
    >- GOTO `src/components/convex-client-provider.tsx` file

- Now we will add the Convex Client Provider into the layout
    >- GOTO `src/app/layout.tsx` for this step

- Now we will create a `Schema` because iske bina NextJS error de rha h, lmao
    - For schema, we create `convex/schem.ts` file
    >- GOTO `convex/schema.ts` file

- After we created the `schema.ts` file, `tasks.ts` file will show errors. 
    - we now need to make another file `convex/projects.ts` 
    - You can go ahead and remove the `tasks.ts` file
    >- GOTO `convex/projects.ts` file


- Now that we have setup the convex API route to `add new` 
    - We will now head to mix `Clerk's safety features into Convex`

- This is mentioned in the documentatio of Convex, under the authentication section
    - So we will go to `Authentication > Clerk > NextJS example`
    - We have to have an account in Clerk's dashboard. And we now have to create a JWT template.

- Working with Clerk and Convex, using JWT template
    - Head over to Clerk dashboard, create an application for our polaris app
    - In the clerk dashboard, head to `Sessions > JWT template` in order to create 
    - Add new template, where you can select Convex out of the box
    - It is not suggested to change anything else while creating this JWT template. Once done, you have a new JWT template for convex
    - Make sure to Copy the `Issuer URL` needed later
    - Now in the `env.local` file, under the `#CLERK` section add `CLERK_JWT_ISSUER_DOMAIN=` and paste the URL there. w/o ""
    - We need to synchronize the convex cloud env variables too
        - In our dashboard for polaris in convex, head to `Settings > Environment variables` and add the env variables related to `CLERK` from `.env.local` file
    - Once this is done, we need to create `convex/auth.config.ts` file
    >- GOTO `convex/auth.config.ts` file

- Once you have setup the `auth.config.ts` file, we now need to setup a Provider
    - But since we are having a lot of providers, we can create `src/components/providers.tsx` file to keep them in-check
    >- GOTO `src/components/providers.tsx` file

- We have successfully transfered all of our providers into the `providers.tsx` file 
    - Now we will learn to access clerk's authentication within convex
    - For this we have to go into `convex/projects.ts`
    >- GOTO `convex/projects.ts`

- Now that we have created `<Authenticated /> and <UnAuthenticated />` components in `project.ts` file we will now head over to setup some new features
    - They are to be created as `src/features/auth/components` folder
    - In there create `auth/components/unauthenticated-view.tsx` file
    >- GOTO `unauthenticated-view.tsx` file to setup the Un-authenticated views

- Once `<UnauthenticatedView/>` is rendered, create `components/auth-loading-view.tsx` file
    >- GOTO `auth-loading-view.tsx` file to setup an auth loading view

- While we can add a button in the auth loading and all, 
    - We can allow only some routes to be accessable to the user
    - This can be done with `proxy.ts` file by only allowing certain routes
    - The above way which we asked user to authorise first, it can also be approached as send unauthorised user to signIn route. 
    - This is done in `proxies.ts` file
    >- GOTO `src/proxies.ts` file to get this done


------------------------------------------------------------------------------
# 5 Background Jobs

- Now Let's begin with setting up our background jobs
    - Setup AI SDK
    - Create blocking API route
    - setup inngest SDK
    - Create background job
    - Compare: blocking vs non-blocking

- Setting up AI SDK
    - For installing the `AI SDK` run `npm i ai@6.0.3` 
    - Then in the documentation, click to `Providers and models`
    - It is recommended to use `Anthropic AI providers` because they are dope
    - In here, we will setup `AI SDK Google` and `AI SDK anthropic` 
    - Google is free, while Anthropic costs arounf 5 Dollars

- Setting up Google AI provider
    - To install it, run `npm install @ai-sdk/google@3.0.1` 
    - Now we will setup an API route in our app, through creating `src/app/api/demo/blocking/route.ts` folder
    - With this we will create `localhost:3000/api/demo/blocking` and will use googl's AI at this endpoint
    >- GOTO `blocking/route.ts`



------------------------------------------------------------------------------
# 6 Firecrawl AI



------------------------------------------------------------------------------
# 7 Error tracking



------------------------------------------------------------------------------
# 8 Projects



------------------------------------------------------------------------------
# 9 IDE layout


------------------------------------------------------------------------------
# 10 File explorer


------------------------------------------------------------------------------
# 11 Code editor state



------------------------------------------------------------------------------
# 12 AI features




------------------------------------------------------------------------------
# 13 Conversion system



------------------------------------------------------------------------------
# 14 Shift to part 2