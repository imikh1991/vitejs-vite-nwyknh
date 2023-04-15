import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ICardsProps } from '../models/types';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<ICardsProps, string>({
            query: (name) => `character/${name}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
