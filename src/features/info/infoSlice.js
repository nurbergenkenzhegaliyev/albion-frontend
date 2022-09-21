import { createSlice } from "@reduxjs/toolkit";
import { getResourcePrice, changeResourcePrice } from "../info/infoActions.js";

const resources = localStorage.getItem('resources') ? JSON.parse(localStorage.getItem('resources')) : null;

const initialState = {
    loading: false,
    error: false,
    craftingItems: [],
    resources
}


const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        deleteInfo : (state) => {
            localStorage.removeItem('resources')
            state.loading = false
            state.error = false
            state.craftingItems = []
            state.resources = []
        }
    },
    extraReducers: {
        
        [getResourcePrice.pending]: (state) => {
            state.loading = true
        },
        [getResourcePrice.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.resources = payload
        },
        [getResourcePrice.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },



        [changeResourcePrice.pending]: (state) => {
            state.loading = true
        },
        [changeResourcePrice.fulfilled]: (state) => {
            state.loading = false
        },
        [changeResourcePrice.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
    }
})

export default infoSlice.reducer;