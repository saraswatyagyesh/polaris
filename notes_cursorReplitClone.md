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
scm-history-item:/media/ubuntu/LINUX1/CODE%20FORGE/NextJS/04cursorReplitClone/Sandbox1/polaris?%7B%22repositoryId%22%3A%22scm0%22%2C%22historyItemId%22%3A%22c6acf200d8118a7f26baad34c56258525ec7d30d%22%2C%22historyItemParentId%22%3A%225087bd579425a27489a172fae6f6916399c5e56c%22%2C%22historyItemDisplayId%22%3A%22c6acf20%22%7D

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

- Once we have setup the API Route for Google's AI and it's UI
    - We can now start with the Inngest route, (Non-blocking)
    - As blocking takes too much time 

- Let's start with `Inngest`
    - Untill it does not come to deployment, you don't primarily need an account setup for inngest at all. 
    - Simply go to the documentation and start with NextJS section
    - To install inngest run `npm install inngest@3.48.1` 
    - Next we have to run innges dev server by running `npm --ignore-script=false inngest-cli@latest dev`
    - It will spin up a local instance of inngest at `localhost:8288`
    - In order to connect inngest to our project we need to create `src/inngest/client.ts`
    >- GOTO `src/inngest/client.ts`

- Once we understand things from `/demo/page.tsx` file, we can now move onto `INNGEST`
- For `Inngest`, we have to do
    - We should be using an API route, to trigger a background job and immediately tell the user that background job is triggered you can carry on.
    - It's complition will give a notification, this can be done with inngest
    - Visit the inngest's documentation, they offer an accountless setup.
    - Simply start with NextJS part
    - Run, `npm install inngest@3.48.1` to install inngest
    - Then we have to run the inngest developer server **which is fast, in-memory version of inngest where you can quickly send and view events and function runs** 
        - Simply go to inngest document website and find the comand for this
        - Earlier it was `npm --ignore-script=false inngest-cli@latest dev`
        - You can run this command or better, search the documentation for this 
        - This will run a quick instance of inngest on **port 8288**
        - At this port you will give you a dashboard    
    - To connect inngest to our project, we need to create `/src/inngest/client.ts`
>- GOT `src/inngest/client.ts` file

- Once you register the `demoGenerate` function in the `src/app/api/inngest/route.ts` file
    - You can now re run both of the commands and invoke the function
    - It will run in the backend side, doing the job, asking the AI your predecided prompt 
    - **How about later, we make a route to take prompt input from user and send it directly to the AI**
    - Now let's plug that into our app, and see how differently it behaves
    - Now copy paste the `app/api/demo/blocking` folder as `app/api/demo/background`  
    >- GOTO `app/api/demo/background/route.ts` file

- Once we have done learning about background jobs, that is
    - With background jobs handled by inngest we can invoke the function multiple times
    - The user is also free
    - And later we will use `AgentKit by inngest` to make our agent perform various tasks
    - Thought is to create a network of agents to orcastrate creation of projects in our IDE
    - Make sure to read the documentaion for installing and using Anthropic AI agents for this IDE


------------------------------------------------------------------------------
# 6 Firecrawl AI

- In this section we will add firecrawlAI and why do we even need it
    - Demonstate outdated AI code patterns
    - Set up firecrawl web scrapping
    - Extract URLs from user prompts
    - Enhance prompts with live documentation

- Basically AI models have a `knowledge cut-off` **IMPORTANT**
    - Meaning jaha tak train kara uske aage ka unko knowledge nhi hota jyada tar, like when we work with latest versions of frameworks 
    - With firecrawl, we can help AI to learn after it's cut-off date too
    - Allowing the websites to be data for our LLMs, this is called `web scrapping`
    - Create an account on firecrawl, open the documentation
        - Now to create a `singleton` or `client` for firecrawl, get the API key
        - To install firecrawl, run `npm i @mendable/firecrawl-js`
        - Now create `/src/lib/firecrawl.ts`
        >- GOTO `/src/lib/firecrawl.ts` file


------------------------------------------------------------------------------
# 7 Error tracking

- In this chapter our goals are
    - To add production grade error tracking and monitoring to our app
        - That is, to make our app production ready rather than flying blind
    - Setup sentry with Next.js wizard
    - Catch background job failure with inngest
    - Monitor AI calls and token usage
    - Add structure logs for user interactions
    - Implement user context for better debugging

- To run inngest CLI, run `npx --ignore-scripts=false inngest-cli@latest dev`
    - Also make sure your dev server is also running
    >- GOTO `/src/app/api/demo/page.tsx` file to prepare for client error

- Now let's setup `sentry` for out app to catch errors 
    - In the dashboard, select `Next.js` and then 
    - Rename the `project slug` to `polaris`
    - Once you create an account you'll get an install script
    - Paste the command in your terminal
    - Copy the authentication token to your env variables
    - And no we're not using mcp servers for now
    - The `/src/app/sentry-example-page` is a page that we created for testing
    - The `/src/app/api/sentry-example-api` is an API route that we created for testing
    - You can visit this route at `localhost:3000/sentry-example-page` and `localhost:3000/api/sentry-example-api` for error logging and tracking
    - In the dashboard of sentry website we can monitor these logs and make sense of them
    - There you can see the `Session Replay` tab, where you can see the user interactions
    - Now if we throw an error in our app, we can catch it and track it
    - To add inngest error, we can add a middleware
    - To install middleware, run `npm i @inngest/middleware-sentry`
    - Now we need to import our middleware into innngest client file 
    - That is in `/src/inngest/client.ts`
        >- GOTO `/src/inngest/client.ts` file
    
    - We can monitor our token count too
        - Use the sentry documentation for vercel 
        - This will be done in `/sentry.edge.config.ts` file
        >- GOTO `/sentry.edge.config.ts` file

    - Once done, we have to find place where we calling `generate Text`
    - After the prompt we add `experimental-telemetry`
        - In case depricated, use the `telemetry` name itself
        - Once telemetry is installed, you will need to send data too for prompts
        >- GOTO `/api/demo/blocking/routes.ts` file to add telemetry


------------------------------------------------------------------------------
# 8 Projects
- In this section, we will create the `Projects page`
- This includes
    - Landing page with polaris branding
    - Build project creation and get feature
    - Create project list layout
    - Add keyboard shortcuts and command palette

- Now before we begin, let's do some cleaning,
    - Remove all the `examples and demo` folders 
    - After that find the `/convex/schema.ts` file
    >- GOTO `/convex/schema.ts` file

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