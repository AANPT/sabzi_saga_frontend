import { configureStore } from "@reduxjs/toolkit";

import {
  userReducer,
  profileReducer,
  paymentReducer,
} from "./reducers/userReducer";
import { productReducer, cartReducer } from "./reducers/productReducer";
import { shopReducer } from "./reducers/shopReducer";
import { vendorReducer } from "./reducers/vendorReducer";
import { otherReducer } from "./reducers/otherReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    product: productReducer,
    shop: shopReducer,
    vendor: vendorReducer,
    cart: cartReducer,
    other: otherReducer,
    order: paymentReducer,
    // admin: adminReducer,
    // vendor: vendorReducer,
  },
});

export default store;

export const server = "https://sabzisaga.onrender.com/api/v1";
