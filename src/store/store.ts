import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../slices/filterSlice"

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpatch = typeof store.dispatch;