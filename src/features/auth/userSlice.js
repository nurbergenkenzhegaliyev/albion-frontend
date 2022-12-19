import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";



const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;


const initialState = {
    loading: false,
    userInfo,
    userToken,
    error: false,
    success: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            localStorage.removeItem('userInfo')
            state.loading = false;
            state.userInfo = null;
            state.userToken = null;
            state.error = null;
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, {payload}) => {
            state.loading = false
            // state.success = true
        },
        [registerUser.rejected]: (state, {payload}) => {
            state.loading = false
            state.error =  payload
        },


        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.userInfo = payload.user
            state.userToken = payload.accessToken
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },


    }
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
