import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: "http://localhost:3000/auth/login",
    signOut: "http://localhost:3000/",
  },
  session:{ 
    strategy: 'jwt',
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
