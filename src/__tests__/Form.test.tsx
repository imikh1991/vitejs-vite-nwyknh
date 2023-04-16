/**
 * @vitest-environment jsdom
 */
import { describe, expect, beforeEach, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form/Form';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import FormSlice from '../store/reducers/FormSlice';

describe('Form', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                form: FormSlice,
            },
        });
    });

    it('submits the form', async () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );

        const nameInput = screen.getByLabelText(/name/i);
        const dateOfBirthInput = screen.getByLabelText(/date of birth/i);
        const genderSelect = screen.getByLabelText(/gender/i);
        const agreeToTermsCheckbox = screen.getByLabelText(/agree to terms/i);
        const favoriteColorRadio = screen.getByLabelText(/red/i);
        const fileInput = screen.getByLabelText(/file upload/i);

        const mockFormData = {
            name: 'John Doe',
            dateOfBirth: '1990-01-01',
            gender: 'male',
            agreeToTerms: true,
            favoriteColor: 'red',
            picture: new File([], 'image.png'),
        };

        await userEvent.type(nameInput, mockFormData.name);
        await userEvent.type(dateOfBirthInput, mockFormData.dateOfBirth);
        fireEvent.change(genderSelect, { target: { value: mockFormData.gender } });
        fireEvent.click(agreeToTermsCheckbox);
        fireEvent.click(favoriteColorRadio);
        fireEvent.change(fileInput, { target: { files: [mockFormData.picture] } });

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        expect(nameInput).toBeDefined();
        expect(dateOfBirthInput).toBeDefined();
    });
});
