import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "./action";

const initialState = {
    data: {
        info: {},
        results: [],
    },
    loading: false,
    error: false,
};

export const locationReducer = createSlice({
    name: "location",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLocation.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchLocation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
            });
    },
});

//export const {} = location.actions;

export default locationReducer.reducer;
