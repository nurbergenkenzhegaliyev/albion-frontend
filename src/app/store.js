import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/auth/userSlice.js';
import infoReducer from "../features/info/infoSlice.js";

const store = configureStore({
    reducer : {
        user: userReducer,
        info: infoReducer,
    }
})

export default store;