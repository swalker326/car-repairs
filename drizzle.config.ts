// import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// config({ path: ".env" });
const url = process.env.TURSO_CONNECTION_URL;
if (!url) {
	throw new Error("TURSO_CONNECTION_URL is not set");
}
const authToken = process.env.TURSO_AUTH_TOKEN;
if (!authToken) {
	throw new Error("TURSO_AUTH_TOKEN is not set");
}

export default defineConfig({
	schema: "./src/db/schema.ts",
	out: "./migrations",
	dialect: "sqlite",
	driver: "turso",
	dbCredentials: {
		url,
		authToken,
	},
});
