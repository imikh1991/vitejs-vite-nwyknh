import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        typing(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },
    },
});

export const searchSliceReducer = searchSlice.reducer;
