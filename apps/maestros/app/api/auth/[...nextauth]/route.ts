import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { prisma } from '@repo/db';
import type { NextAuthOptions } from 'next-auth';

if (!process.env.GH_CLIENT_ID || !process.env.GH_CLIENT_SECRET) {
  throw new Error("You're missing GitHub variables.");
}

export const authOptions: NextAuthOptions = {
  // @ts-expect-error Not totally sure what's up here?
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
