import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { connectDB } from "./lib/db";
import { User } from "./models/user";
import bcrypt from "bcrypt";

const authSecret = process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET;

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  secret: authSecret,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    Credentials({
      credentials: {
        email: {
          name: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          name: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials.email }).select(
          "+password",
        );
        if (!user) {
          return null;
        }
        if (user.provider === "google") {
          return;
        }
        const isMatch = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );
        if (!isMatch) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await connectDB();
      if (account?.provider === "google") {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            provider: account.provider,
            image: user.image,
          });
        }
      }
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
});
