// import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

// config({ path: ".env" });

const url = process.env.TURSO_CONNECTION_URL;
if (!url) {
	throw new Error("TURSO_CONNECTION_URL is not set");
}
const authToken = process.env.TURSO_AUTH_TOKEN;
if (!authToken) {
	throw new Error("TURSO_AUTH_TOKEN is not set");
}

const client = createClient({
	url,
	authToken,
});

export const db = drizzle(client);
