/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import NotFound from '../pages/NotFound';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import FormSlice from '../store/reducers/FormSlice';

describe('App', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                form: FormSlice,
            },
        });
    });

    it('renders Not Found page component', () => {
        render(
            <Provider store={store}>
                <NotFound />
            </Provider>
        );
        expect(
            screen.getByText(/This is Not Found This Universe it does not exist. Wubba Lubba Dub Dub!/i)
        ).toBeDefined();
    });
});
