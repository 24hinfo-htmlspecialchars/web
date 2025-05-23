import NextAuth, { User } from "next-auth"
import { encode as defaultEncode } from "next-auth/jwt"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma/prisma"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { v4 as uuid } from "uuid"

import { getUserFromDb } from "./database"

const adapter = PrismaAdapter(prisma)


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter,
  session: {
    strategy: "database",
  },
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        const { email, password } = credentials as { email: string, password: string }
        const user = await getUserFromDb(email, password)
        if (user) {
          return user as User
        }
        return null
      },
    })
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/login",
    newUser: "/app",
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true
      }
      return token
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid()
        if (!params.token.sub) {
          throw new Error("No user ID found in token")
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        })

        if (!createdSession) {
          throw new Error("Failed to create session")
        }

        return sessionToken
      }
      return defaultEncode(params)
    },
  }
})