import { combineReducers, configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { characterApi } from '../requests/createApi';
import searchReducer from '../store/reducers/SearchSlice';

const rootReducer = combineReducers({
    searchReducer,
    [characterApi.reducerPath]: characterApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
