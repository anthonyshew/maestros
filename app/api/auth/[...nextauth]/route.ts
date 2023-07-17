import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '#/prisma'
import type { NextAuthOptions } from 'next-auth'

if (!process.env.GH_CLIENT_ID || !process.env.GH_CLIENT_SECRET) {
  throw new Error("You're missing GitHub variables.")
}

export const authOptions: NextAuthOptions = {
  // @ts-expect-error
  adapter: PrismaAdapter(prisma),
  providers: [
    process.env.VERCEL_ENV === "preview"
      ? CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "ashew",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize() {
          return {
            id: "1",
            name: "Anthony Shew",
            email: "anthony@shew.dev",
            image: "https://i.pravatar.cc/150?u=jsmith@example.com",
          }
        },
      }) :
      GitHub({
        clientId: process.env.GH_CLIENT_ID,
        clientSecret: process.env.GH_CLIENT_SECRET
      }),
  ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
