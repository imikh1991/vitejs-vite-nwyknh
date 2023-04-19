import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData, ICharacterFormState } from '../../models/types';

const initialState: ICharacterFormState = {
    value: [],
};
export const CharacterFormSlice = createSlice({
    name: 'charcterForm',
    initialState,
    reducers: {
        addCharacter: (state, action: PayloadAction<FormData>) => {
            state.value = state.value.concat(action.payload);
        },
    },
});

export const { addCharacter } = CharacterFormSlice.actions;

export default CharacterFormSlice.reducer;
