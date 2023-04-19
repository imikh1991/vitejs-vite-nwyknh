import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse, ICharacter } from '../../models/types';
interface SearchState {
    search: string;
    searchResults: ICharacter[] | undefined;
}

const initialState: SearchState = {
    search: '',
    searchResults: [],
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setCharacter(state, action: PayloadAction<ApiResponse>) {
            state.searchResults = action.payload.results;
        },
    },
});

const { actions, reducer } = searchSlice;

export const { setSearch, setCharacter } = actions;

export default reducer;
