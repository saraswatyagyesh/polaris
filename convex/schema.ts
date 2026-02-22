/*-----------------------------------------------------------------------------------------------
                                            CREATING SCHEMA FOR OUR APP

- The importStatus is an enum of values which we can use to show status of projects imported by user
    - They can be "importing", "completed", or "failed"

- Using "ownerID" will allow us to filter projects much quickly, as it will be the unique key here

- Convex will synchronize the schema with what it has on the cloud and will generate a new table based on this schema
    - Leaving the earlier table as obsolete

- GOTO notes.md for creating projects.ts and removing tasks.ts 

- Now that we are here to setup Projects page
    - Here we will add all the features
    - So that if we do any UI changes depending on the field on the project in the database, 
    - We can do it, instead of faking it
    - Before running npm dev. Delete all the DATA > PROJECTS
    - Meaning, remove previous projects from convex dashboard
    - Also delete the tasks table too
    - Also delete `sampledata.jsonl`
    - THen GOTO `/convex/projects.ts`

-------------------------------------------------------------------------------------------------*/

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    projects: defineTable({
        name: v.string(),
        ownerId: v.string(),
        updatedAt: v.number(),
        importStatus: v.optional(
            v.union(
                v.literal("importing"),
                v.literal("completed"),
                v.literal("failed"),
            ),
        ),
        exportStatus: v.optional(
            v.union(
                v.literal("exporting"),
                v.literal("completed"),
                v.literal("failed"),
                v.literal("cancelled"),
            ),
        ),
        exportReportUrl: v.optional(v.string()),
    }).index("by_owner", ["ownerId"]),
});