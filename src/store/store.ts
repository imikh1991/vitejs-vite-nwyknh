import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../requests/createApi';
// import { animeAPI } from '../service/AnimeService';
// import searchReducer from '../store/reducers/SearchSlice';

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* настроен store
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchSliceReducer } from './reducers/SearchReducer';

const rootReducer = combineReducers({
  searchSliceReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
*/
