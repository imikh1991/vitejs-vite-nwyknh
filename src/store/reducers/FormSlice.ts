import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
    form: string;
    formResults: FormData[] | undefined;
}

/* export interface FormData {
    key: number;
    characters: Hero[];
}

interface Hero {
    name: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    picture: { [key: number]: {} };
    dateOfBirth: string;
    gender: 'male' | 'female' | 'non-binary';
    agreeToTerms: boolean;
    favoriteColor?: string;
}
*/
interface FormData {
    name: string;
    picture: FileList;
    dateOfBirth: string;
    gender: string;
    agreeToTerms: boolean;
    favoriteColor: string;
}

const initialState: FormState = {
    form: '',
    formResults: [],
};

export const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        formIsSubmited(state, action: PayloadAction<Array<FormData>>) {
            const formData = action.payload;
            state.formResults = formData;
        },
    },
});

const { actions, reducer } = FormSlice;

export const { formIsSubmited } = actions;

export default reducer;
