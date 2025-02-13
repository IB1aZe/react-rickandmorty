import { createSlice } from "@reduxjs/toolkit";
import { fetchEntities } from "./action";

const initialState = {
    data: {
        info: {},
        results: [],
    },
    loading: false,
    error: false,
};

export const entitiesReducer = createSlice({
    name: "entities",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEntities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEntities.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchEntities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
            });
    },
});

//export const {} = entities.actions;

export default entitiesReducer.reducer;
