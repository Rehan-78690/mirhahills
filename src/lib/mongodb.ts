import { MongoClient, type Db } from "mongodb";

/**
 * MongoDB connection helper.
 *
 * On serverless hosts (e.g. Vercel) each warm invocation reuses the same module
 * instance, so we cache a single connecting `MongoClient` promise on `globalThis`
 * to avoid opening a new connection per request (the classic connection-storm
 * bug). When `MONGODB_URI` is unset, the app falls back to file storage — see
 * `lib/leads.ts`.
 */

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "mira_hills";

declare global {
  // eslint-disable-next-line no-var
  var _miraMongoClient: Promise<MongoClient> | undefined;
}

/** True when a Mongo connection string is configured. */
export function isMongoConfigured(): boolean {
  return Boolean(uri);
}

function clientPromise(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI is not set.");
  if (!global._miraMongoClient) {
    global._miraMongoClient = new MongoClient(uri, { maxPoolSize: 5 }).connect();
  }
  return global._miraMongoClient;
}

/** Resolve the application database (cached connection). */
export async function getDb(): Promise<Db> {
  const client = await clientPromise();
  return client.db(dbName);
}
