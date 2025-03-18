import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      jobTitle: a.string(),
      cost: a.integer(), // Use 'integer' instead of 'int'
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // Adding the JobSalary model
  JobSalary: a
    .model({
      jobTitle: a.string(),
      cost: a.integer(), // Use 'integer' instead of 'int'
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // Adding the CurrentGoal model
  CurrentGoal: a
    .model({
      task: a.string(),
      status: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // Adding the FutureGoal model
  FutureGoal: a
    .model({
      task: a.string(),
      status: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: currentGoals } = await client.models.CurrentGoal.list()
// const { data: futureGoals } = await client.models.FutureGoal.list()

// return (
//   <div>
//     <ul>{currentGoals.map(goal => <li key={goal.id}>{goal.task} - {goal.status}</li>)}</ul>
//     <ul>{futureGoals.map(goal => <li key={goal.id}>{goal.task} - {goal.status}</li>)}</ul>
//   </div>
// )