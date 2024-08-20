import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
    filters: {
        positions: string[];
        roles: string[];
        levels: string[];
        companies: string[];
        contracts: string[];
        locations: string[];
        languages: string[];
        tools: string[];
    };
}

const initialState: FilterState = {
    filters: {
        positions: [],
        roles: [],
        levels: [],
        companies: [],
        contracts: [],
        locations: [],
        languages: [],
        tools: [],
    }
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleFilter: (state, action: PayloadAction<string>) => {
            const json = JSON.parse(action.payload) as {"category": "positions" | "roles" | "levels" | "companies" | "contracts" | "locations" | "languages" | "tools", value: string};
            
            if(state.filters[json.category].includes(json.value))
                state.filters[json.category] = state.filters[json.category].filter(item => item != json.value);
            else
                state.filters[json.category].push(json.value);
        }
    },
});

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
