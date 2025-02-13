import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEntities = createAsyncThunk(
    "entities/fetchEntities",
    async (page, thunkAPI) => {
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?page=${page}`
            ).then((response) => response.json());
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue("Failure");
        }
    }
);
