import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  { products: [] },
  {
    allProductsRequest: (state) => {
      state.loading = true;
    },
    allProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    allProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    allShopProductsRequest: (state) => {
      state.loading = true;
    },
    allShopProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    allShopProductsFail: (state, action) => {
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

export const cartReducer = createReducer(
  {},
  {
    addToCartRequest: (state) => {
      state.loading = true;
    },
    addToCartSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFromCartRequest: (state) => {
      state.loading = true;
    },
    removeFromCartSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    removeFromCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCartRequest: (state) => {
      state.loading = true;
    },
    updateCartSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    placeOrderRequest: state => {
      state.loading = true;
    },
    placeOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    placeOrderFail: (state, action) => {
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
