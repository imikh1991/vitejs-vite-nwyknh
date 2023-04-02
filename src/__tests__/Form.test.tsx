/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form/Form';

describe('Form', () => {
    it('renders a form with required fields', () => {
        render(<Form />);

        expect(screen.getByLabelText('Name:')).toBeDefined();
        expect(screen.getByLabelText('Date of Birth:')).toBeDefined();
        expect(screen.getByLabelText('Gender:')).toBeDefined();
        expect(screen.getByLabelText('Agree to terms and conditions')).toBeDefined();
        expect(screen.getByLabelText('Red')).toBeDefined();
        expect(screen.getByLabelText('Green')).toBeDefined();
        expect(screen.getByLabelText('Blue')).toBeDefined();

        // Fill out the required fields and submit the form
        const nameInput = screen.getByLabelText('Name:');
        const dobInput = screen.getByLabelText('Date of Birth:');
        const genderInput = screen.getByLabelText('Gender:');
        const agreeInput = screen.getByLabelText('Agree to terms and conditions');

        fireEvent.change(nameInput, { target: { value: 'John' } });
        fireEvent.change(dobInput, { target: { value: '2022-01-01' } });
        fireEvent.change(genderInput, { target: { value: 'male' } });
        fireEvent.click(agreeInput);
        // fire submit
        // Click the "Submit" button
        const submitButton = screen.getByRole('button', { name: 'Submit' });
        fireEvent.click(submitButton);

        // Check that the form data was added to the card grid
        expect(screen.getByText('Male')).toBeDefined();
        expect(screen.getByText('Red')).toBeDefined();
    });
    it('allows user to upload a file', () => {
        render(<Form />);

        const fileInput = screen.getByLabelText('File Upload:') as HTMLInputElement;
        const file = new File(['test'], 'test.png', { type: 'image/png' });

        fireEvent.change(fileInput, { target: { files: [file] } });
        expect(fileInput.files?.[0]).toStrictEqual(file);
    });
});
