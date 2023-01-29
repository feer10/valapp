import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const valorantApi = createApi({
  reducerPath: 'valorantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://valorant-api.com/v1/' }),
  endpoints: (builder) => ({
    getDataByName: builder.query({
      query: (name) => `${name}`,
    }),
    getAgentByName: builder.query({
      query: (uuid) => `agents/${uuid}`,
    }),
    getWeaponByName: builder.query({
      query: (uuid) => `weapons/${uuid}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataByNameQuery, useGetAgentByNameQuery, useGetWeaponByNameQuery } = valorantApi