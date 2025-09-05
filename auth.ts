import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/signin",
  },

  // menambahkan role ke dalam jwt dan session harus membuat file types/authjs.d.ts terlebih dahulu
  callbacks: {
    jwt({ token, user}) {
      if (user) token.role = user.role; 
      return token;
    },
    session({ session, token}) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    }
  }
});
