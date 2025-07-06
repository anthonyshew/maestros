import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { prisma } from "@repo/db";

if (!process.env.GH_CLIENT_ID || !process.env.GH_CLIENT_SECRET) {
	throw new Error("You're missing GitHub variables.");
}

export const authOptions: NextAuthOptions = {
	// @ts-expect-error Not sure what's going on here, honestly.
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHub({
			clientId: process.env.GH_CLIENT_ID,
			clientSecret: process.env.GH_CLIENT_SECRET,
		}),
	],
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
