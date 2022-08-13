import { CosmosClient } from "@azure/cosmos";

// For some reason, edge functions don't seem to have some node properties. As such, the process.version value which is
// used by the universal-user-agent package from within CosmosClient will be overriden. This is to prevent the
// getUserAgent function from crashing when running in the edge.
// @ts-ignore
process.version = "v16.16.0";

// Initialize the CosmosDB client | Connect to the database
const endpoint = process.env.COSMOSDB_ENDPOINT || "";
const key = process.env.COSMOSDB_KEY;
const client = new CosmosClient({ endpoint, key });

export async function getContainer(id: string) {
  // Get database response object
  const { database } = await client.databases.createIfNotExists({
    id: process.env.COSMOSDB_DATABASE,
  });

  // Get links container response object
  return (await database.containers.createIfNotExists({ id })).container;
}
