import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";


export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async ({ username, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            // make request to backend
            await axios.post(
                '/auth/registration',
                { username, password },
                config
            )
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        
    }
)
    
export const userLogin  = createAsyncThunk(
    // action type string
    'user/login',
    // callback function
    async ({ username, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            // make request to backend
            const { data }  = await axios.post(
                '/auth/login',
                { username, password },
                config
            )
            console.log(data);

            localStorage.setItem('userToken', data.accessToken);
            localStorage.setItem('userInfo', JSON.stringify(data.user));

            return data

        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        
    }
)

export const getResourcePrice = createAsyncThunk(
    'user/getRecourcePrices',
    async(arg, { getState, rejectWithValue } ) => {
        try {
            const { user } = getState();
            const config = {
                headers: {
                    authorization: `Bearer ${user.userToken}`
                }
            }
            const { data } = await axios.post('/auth/resources', { id: user.userInfo.id }, config);
            localStorage.setItem('resources', JSON.stringify(data));
            return data;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
            
        }
    }
)

export const changeResourcePrice = createAsyncThunk(
    'user/changeResourcePrice',
    async({name, price}, { getState, rejectWithValue } ) => {
        try {
            console.log("starting change")
            const { user } = getState();
            const config = {
                headers: {
                    authorization: `Bearer ${user.userToken}`
                }
            }
            console.log("id: ", user.userInfo.id);
            console.log("name: ", name);
            console.log("price: ", price);
            const {data} = await axios.post('/auth/update', { id: user.userInfo.id, name, price }, config);
            console.log(data)
            return data;

        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
            
        }
    }
)