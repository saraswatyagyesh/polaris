/*---------------------------------------------------------------------------------------------
                                                DEMO ERROR ROUTE

- In this file we will create a demo error route
    - Then we will call the error via clicking API Error button in /demo page
    - Then we'll create another route for inngest-error handling route
        - As `/src/app/api/demo/inngest-error/route.ts`file
        >- GOTO `src/app/api/demo/inngest-error/route.ts`

--------------------------------------------------------------------------------------------*/
export async function POST() {
    throw new Error("API error: Something went wrong on the server");
};