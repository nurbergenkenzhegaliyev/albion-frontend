import { createSlice } from "@reduxjs/toolkit";
import {
  getResourcePrice,
  changeResourcePrice,
  getCraftingItems,
  addCraftingItem,
  removeCraftingItem,
  addCraftingItemSellPrice,
} from "../info/infoActions.js";

const resources = localStorage.getItem("resources")
  ? JSON.parse(localStorage.getItem("resources"))
  : [];
const craftingItems = localStorage.getItem("craftingItems")
  ? JSON.parse(localStorage.getItem("craftingItems"))
  : [];
const prices = localStorage.getItem("prices")
  ? JSON.parse(localStorage.getItem("prices"))
  : [];

const initialState = {
  loading: false,
  error: false,
  craftingItems,
  resources,
  prices,
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
      state.prices = [];
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
    [changeResourcePrice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.resources = payload;
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
      state.craftingItems = payload.craftingItems;
      state.prices = payload.prices;
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
      state.craftingItems = payload.data;
      state.prices = payload.dataPrices;
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

    [addCraftingItemSellPrice.pending]: (state) => {
      state.loading = true;
    },
    [addCraftingItemSellPrice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.prices = payload;
    },
    [addCraftingItemSellPrice.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { deleteInfo } = infoSlice.actions;
export default infoSlice.reducer;
