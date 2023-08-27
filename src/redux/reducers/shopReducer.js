import { createReducer } from "@reduxjs/toolkit";

export const shopReducer = createReducer(
  { shops: [] },
  {
    allShopsRequest: (state) => {
      state.loading = true;
    },
    allShopsSuccess: (state, action) => {
      state.loading = false;
      state.shops = action.payload;
    },
    allShopsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    loadShopRequest: (state) => {
      state.loading = true;
    },
    loadShopSuccess: (state, action) => {
      state.loading = false;
      state.shops = action.payload;
    },
    loadShopFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
