import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getSession } from "next-auth/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.SERVER_URL,
  prepareHeaders: async (headers) => {
    const session = await getSession();
    if (session) {
      headers.set("Authorization", `Bearer ${session.jwt}`);
      return headers;
    }
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const session = await getSession();
  let result: any = await baseQuery(args, api, extraOptions);
  if (
    result.error &&
    (result.error.status === 401 || result.error.status === 403)
  ) {
    const data: any = await baseQuery(
      {
        url: "token/refresh",
        method: "post",
        body: { refreshToken: session?.refreshToken },
      },
      api,
      extraOptions
    );
    if (data.data) {
      //Trying to update the session property to take the new jwt
      result = await baseQuery(args, api, extraOptions);
      result.error.data = data.data.jwt;
    }
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
