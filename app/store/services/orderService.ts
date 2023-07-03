import { api } from "../api";

const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: () => {
        return {
          url: "orders?populate[products][populate][0]=*",
        };
      },
      providesTags: ["orders"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetOrdersQuery } = orderApi;
