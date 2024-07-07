import { api } from "../";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/products/search",
        params,
      }),
      providesTags: ["Product"],
    }),
    getProductId: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: (body) => ({
        url: "/products/create",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductIdQuery,
  useCreateProductMutation,
} = productApi;
// endpoints: (build) => ({
//   getProducts: build.query({
//     query: (params) => ({
//       url: "/products/search",
//       params,
//     }),
//     providesTags: ["Product"],
//   }),

// }),
// });

// export const { useGetProductsQuery } = productApi;
