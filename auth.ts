import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./utils/auth.config"
import prisma from "./lib/db";



 
export const { auth, handlers:{GET,POST}, signIn, signOut } = NextAuth({
  callbacks:{
    async session({token, session}){
      if(token.sub && session.user){
        session.user.id = token.sub;
      }
      return session;
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,

})