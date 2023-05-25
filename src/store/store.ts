import { configureStore } from "@reduxjs/toolkit";

import { uiSlice, pokemonSlice, breakingBadSlice } from ".";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        pokemon: pokemonSlice.reducer,
        breakingBad: breakingBadSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;