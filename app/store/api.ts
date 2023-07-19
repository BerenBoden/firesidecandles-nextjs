import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getSession } from "next-auth/react";
import generateQueryString from "@/utils/generateQueryString";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://firesidecandles-strapi-production.up.railway.app/api/",
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
      result = await baseQuery(args, api, extraOptions);
      result.error.data = data.data.jwt;
    }
  }
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Orders", "Products"],
  endpoints: (builder) => ({
    getCartProducts: builder.query({
      query: ({ ids, type }) => {
        const url = generateQueryString(ids);
        return {
          url: url,
        };
      },
      providesTags: ["Products"],
    }),
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

