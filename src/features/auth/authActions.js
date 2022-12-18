import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";


export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async ({ username, password }, { rejectWithValue }) => {
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await axios.post(
                '/auth/registration',
                { username, password },
                config
            )
            
        } catch (error) {

            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
        
    }
)
    
export const userLogin  = createAsyncThunk(
    'user/login',
    
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
