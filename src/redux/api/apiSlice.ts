import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
        mode: 'cors',
        prepareHeaders: (headers) => {

            return headers
        }
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query<any, void>({
            query: () => '/users'
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useGetAllUsersQuery, useLoginUserMutation } = apiSlice