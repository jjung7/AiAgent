import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import * as schema from "@/db/schema"; // your schema
export const auth = betterAuth({
    emailAndPassword:{
        enabled: true,
    },
    trustedOrigins: [
    "http://localhost:3000",   // dev HTTP
    "https://localhost:3000"   // dev HTTPS
    ],
    secure: process.env.NODE_ENV === "production", 
    sameSite: "lax",
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    
        schema:{
            ...schema
        }}),
})