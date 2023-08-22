import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import prisma from '@repo/prisma'
import type { NextAuthOptions } from 'next-auth'

if (!process.env.GH_CLIENT_ID || !process.env.GH_CLIENT_SECRET) {
  throw new Error("You're missing GitHub variables.")
}

export const authOptions: NextAuthOptions = {
  // @ts-expect-error
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET
    }),
  ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
