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
        const { user, jwt } = await axios
          .post(`http://localhost:1337/api/auth/local`, {
            identifier: credentials.identifier,
            password: credentials.password,
          })
          .then(({ data }) => {
            return data;
          })
          .catch((error) => {
            throw new Error(JSON.stringify(error.response.data));
          });
          
        return { jwt, ...user };
      },
    }),
  ],
};
