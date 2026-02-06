/*-----------------------------------------------------------------------------------------------
                                            CREATING SCHEMA FOR OUR APP

- The importStatus is an enum of values which we can use to show status of projects imported by user
    - They can be "importing", "completed", or "failed"

- Using "ownerID" will allow us to filter projects much quickly, as it will be the unique key here

- Convex will synchronize the schema with what it has on the cloud and will generate a new table based on this schema
    - Leaving the earlier table as obsolete

- GOTO notes.md for creating projects.ts and removing tasks.ts 



-------------------------------------------------------------------------------------------------*/

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    projects: defineTable({
        name: v.string(),
        ownerId: v.string(),
        importStatus: v.optional(
            v.union(
                v.literal("importing"),
                v.literal("completed"),
                v.literal("failed"),
            )
        )
    }).index("by_owner", ["ownerId"]),
});