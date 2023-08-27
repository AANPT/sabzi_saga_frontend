import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer(
  {},
  {
    contactRequest: (state) => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    feedbackRequest: (state) => {
      state.loading = true;
    },
    feedbackSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    feedbackFail: (state, action) => {
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
