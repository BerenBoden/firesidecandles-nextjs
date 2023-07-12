import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        identifier: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const {
          refreshToken,
          user: { email, username: name, id },
          jwt,
        } = await axios
          .post(`${process.env.TEST_URL}auth/local`, {
            identifier: credentials.identifier,
            password: credentials.password,
          })
          .then(({ data }) => {
            return data;
          })
          .catch((error) => {
            throw new Error(JSON.stringify(error.response.data));
          });

        return { jwt, email, name, id, refreshToken };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session) {
        console.log("jwt update");
        return { ...token, ...session };
      }
      return { ...token, ...user };
    },
    async session({ session, token, user, ...rest }) {
      return { ...session, ...token, ...user };
    },
  },
};
