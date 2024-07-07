import { api } from "../"

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: (params) => ({
                url: '/users/search',
                params
            }),
            providesTags: ["Users"]
        }),
        signInUser: build.mutation({
            query: (body) => ({
                url: "/auth/sign-in",
                method: "POST",
                body
            }),
            invalidatesTags: ['Users']
        }),
        registerUser: build.mutation({
            query: (body) => ({
                url: "/auth/user/sign-up",
                method: "POST",
                body
            }),
            invalidatesTags: ["User"]
        }),
    }),
})

export const {
    useGetUsersQuery,
    useSignInUserMutation,
    useRegisterUserMutation,
} = userApi