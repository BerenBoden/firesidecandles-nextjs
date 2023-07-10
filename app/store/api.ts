import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { signIn, getSession } from "next-auth/react";
import axios from "axios";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1337/api/",
  prepareHeaders: async (headers) => {
    const session = await getSession();
    if (session) {
      console.log(session.jwt);
      headers.set("Authorization", `Bearer ${session.jwt}`);
      return headers;
    }
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const session = await getSession();
  let result: any = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const data = await axios.post("http://localhost:1337/api/token/refresh", {
      ...{ refreshToken: session?.refreshToken },
    });
    result.error.data.error.details = data.data.jwt;
  }
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => {
        return {
          url: "orders?populate[products][populate][0]=*",
        };
      },
      providesTags: ["Orders"],
    }),
  }),
});
