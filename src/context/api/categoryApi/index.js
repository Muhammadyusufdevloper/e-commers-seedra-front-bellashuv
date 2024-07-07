import { api } from '../'

export const categoryApi = api.injectEndpoints({
    endpoints: (build) => ({
        // Get request
        getCategory: build.query({
            query: (params) => ({
                url: '/category',
                params
            }),
            providesTags: ["Product"]
        }),
    }),
})

export const {
    useGetCategoryQuery,
} = categoryApi
