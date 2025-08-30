import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import * as schema from "@/db/schema"; // your schema
export const auth = betterAuth({
    socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        },
    },
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