import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: {
        loading: false,
    }
}


export const loadingSlice = createSlice({
    name: "loading",
    initialState: initialState.loading,
    reducers: {
        show: (state) => {
            state.loading = true;
        },
        hide: (state) => {
            state.loading = false;
        },
    },
});

export const loadingReducer = loadingSlice.reducer;
