import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const getResourcePrice = createAsyncThunk(
    'info/getRecourcePrices',
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
    'info/changeResourcePrice',
    async({name, price}, { getState, rejectWithValue } ) => {
        try {
            const { user } = getState();
            const config = {
                headers: {
                    authorization: `Bearer ${user.userToken}`
                }
            }
            const {data} = await axios.post('/auth/update', { id: user.userInfo.id, name, price }, config);
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

export const getCraftingItems = createAsyncThunk(
    'info/getCraftingItems',
    async(arg, { getState, rejectWithValue } ) => {
        try {
            const { user } = getState();
            const config = {
                headers: {
                    authorization: `Bearer ${user.userToken}`
                }
            }
            const {data} = await axios.post('/info/getCraftingItems', {id: user.userInfo.id}, config);
            localStorage.setItem('craftingItems', JSON.stringify(data));
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

export const addCraftingItem = createAsyncThunk(
    'info/addCraftingItem',
    async(item, { getState, rejectWithValue } ) => {
        try {
            console.log(item);

            const { user } = getState();
            const config = {
                headers: {
                    authorization: `Bearer ${user.userToken}`
                }
            }
            const {data} = await axios.post('/info/addCraftingItem', {id: user.userInfo.id, craftingItem: item}, config);
            localStorage.setItem('craftingItems', JSON.stringify(data));
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

export const removeCraftingItem = createAsyncThunk(
    'info/removeCraftingItem',
    async(item, { getState, rejectWithValue } ) => {
        try {
            console.log(item);

            const { user } = getState();
            const config = {
                headers: {
                    authorization: `Bearer ${user.userToken}`
                }
            }
            const {data} = await axios.post('/info/removeCraftingItem', {id: user.userInfo.id, craftingItem: item}, config);
            localStorage.setItem('craftingItems', JSON.stringify(data));
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

// export const getItemInfo = createAsyncThunk(
//     'info/getItemInfo',
//     async(uniquename,{rejectWithValue}) => {
//         try {
//             const data = await axios.post('/info/getItemInfo', {uniquename});
//             return data;
//         } catch (error) {
//             // return custom error message from API if any
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     } 
// )