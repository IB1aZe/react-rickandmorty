import { configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "../slices/entities";
import locationReducer from "../slices/location";

export const store = configureStore({
    reducer: {
        entities: entitiesReducer,
        location: locationReducer,
    },
});

export default store;
