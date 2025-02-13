import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk(
    "location/fetchLocation",
    async (page, thunkAPI) => {
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/location/?page=${page}`
            ).then((response) => response.json());
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue("Failure");
        }
    }
);
