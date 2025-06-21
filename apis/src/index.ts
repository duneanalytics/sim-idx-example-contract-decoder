import { Hono } from "hono";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { poolCreated } from "./db/schema/Listener"; // Adjust the import path as necessary
import { simTypes } from "sim-idx"; // Import schema to ensure it's registered

type Bindings = {
  DB_CONNECTION_STRING: string;
};


const filterToken0 = simTypes.Address.from("7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9");

let dbClient: ReturnType<typeof drizzle>;

const app = new Hono<{ Bindings: Bindings }>();

app.get("/*", async (c) => {
  try {
    const client = await getDBClient(c.env);

    const result = await client.select().from(poolCreated).where(
      eq(poolCreated.token0, filterToken0)
    ).limit(5);

    return Response.json({
      result: result,
    });
  } catch (e) {
    console.error("Database operation failed:", e);
    return Response.json({ error: (e as Error).message }, { status: 500 });
  }
});

// Lazily initializes and returns a shared, connected dbClient instance.
async function getDBClient(env: Bindings) {
  if (!env.DB_CONNECTION_STRING) {
    throw new Error(
      "Missing required environment variable: DB_CONNECTION_STRING"
    );
  }

  if (!dbClient) {
    dbClient = drizzle(env.DB_CONNECTION_STRING);
  }

  return dbClient;
}

export default app;
