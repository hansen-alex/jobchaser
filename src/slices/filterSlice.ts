import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
    filters: string[];
}

const initialState: FilterState = {
    filters: [],
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleFilter: (state, action: PayloadAction<string>) => {
            if(state.filters.includes(action.payload))
                state.filters = state.filters.filter(item => item != action.payload);
            else
                state.filters.push(action.payload)

            console.log(state.filters);
        }
    },
});

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
