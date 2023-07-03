import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
    prepareHeaders: async (headers) => {
      const session = await getServerSession(authOptions);
      console.log(session?.jwt);
      if (session) {
        headers.set("authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4MzQ5MTkzLCJleHAiOjE2ODgzNTAwOTN9.B18xFDSSKDHUaH6FbGMi2t6MsKRkEzN7TBfdgoB6ncA`);
        return headers;
      }
    },
  }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({}),
});
