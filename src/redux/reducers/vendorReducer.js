import { createReducer } from "@reduxjs/toolkit";

export const vendorReducer = createReducer(
  {},
  {
    createShopRequest: (state) => {
      state.loading = true;
    },
    createShopSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createShopFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createProductRequest: (state) => {
      state.loading = true;
    },
    createProductSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductRequest: (state) => {
      state.loading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteProductFail: (state, action) => {
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
