import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, getResourcePrice, changeResourcePrice } from "./authActions";

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const resources = localStorage.getItem('resources') ? JSON.parse(localStorage.getItem('resources')) : null;
console.log('slice resources',resources);

const initialState = {
    isLoading: false,
    userInfo,
    userToken,
    error: false,
    success: false,
    resources
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            localStorage.removeItem('userInfo')
            localStorage.removeItem('resources')
            state.isLoading = false;
            state.userInfo = null;
            state.userToken = null;
            state.error = null;
            state.resources = null;
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            // state.success = true
        },
        [registerUser.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error =  payload
        },


        [userLogin.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.userInfo = payload.user
            state.userToken = payload.accessToken
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },



        [getResourcePrice.pending]: (state) => {
            state.isLoading = true
        },
        [getResourcePrice.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.resources = payload
        },
        [getResourcePrice.rejected]: (state, {payload}) => {
            state.isLoading = false
        },



        [changeResourcePrice.pending]: (state) => {
            state.isLoading = true
        },
        [changeResourcePrice.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state[payload.name] = payload.price;
        },
        [changeResourcePrice.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },

    }
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
