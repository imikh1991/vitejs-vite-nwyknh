import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse } from '../models/types';
import { HEROES_API_ALL } from '../const/api-query';

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: HEROES_API_ALL }),
    endpoints: (builder) => ({
        getCharacterByName: builder.query<ApiResponse, string>({
            query: (name) => `character/${name}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharacterByNameQuery } = characterApi;
