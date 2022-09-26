import { createSlice } from "@reduxjs/toolkit";
import {
  getResourcePrice,
  changeResourcePrice,
  getCraftingItems,
  addCraftingItem,
  removeCraftingItem,
} from "../info/infoActions.js";

const resources = localStorage.getItem("resources")
  ? JSON.parse(localStorage.getItem("resources"))
  : null;
const craftingItems = localStorage.getItem("craftingItems")
  ? JSON.parse(localStorage.getItem("craftingItems"))
  : [];

const initialState = {
  loading: false,
  error: false,
  craftingItems,
  resources,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    deleteInfo: (state) => {
      localStorage.removeItem("resources");
      state.loading = false;
      state.error = false;
      state.craftingItems = [];
      state.resources = [];
    },
  },
  extraReducers: {
    [getResourcePrice.pending]: (state) => {
      state.loading = true;
    },
    [getResourcePrice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.resources = payload;
    },
    [getResourcePrice.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [changeResourcePrice.pending]: (state) => {
      state.loading = true;
    },
    [changeResourcePrice.fulfilled]: (state) => {
      state.loading = false;
    },
    [changeResourcePrice.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [getCraftingItems.pending]: (state) => {
      state.loading = true;
    },
    [getCraftingItems.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.craftingItems = payload;
    },
    [getCraftingItems.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [addCraftingItem.pending]: (state) => {
      state.loading = true;
    },
    [addCraftingItem.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.craftingItems = payload;
    },
    [addCraftingItem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [removeCraftingItem.pending]: (state) => {
      state.loading = true;
    },
    [removeCraftingItem.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.craftingItems = payload;
    },
    [removeCraftingItem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { deleteInfo } = infoSlice.actions;
export default infoSlice.reducer;