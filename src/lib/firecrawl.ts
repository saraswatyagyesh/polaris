/*--------------------------------------------------------------------------------
                                        SETTING UP SINGLETON OF FIRECRAWL
- Do not forget to get the API key from the dashboard of firecrawl
- Once setup, we can check this function by modifying inngest function in `/src/inngest/functions/ts` file





----------------------------------------------------------------------------------*/

import Firecrawl from "@mendable/firecrawl-js";

export const firecrawl = new Firecrawl({
    apiKey: process.env.FIRE_CRAWL_API_KEY,
});