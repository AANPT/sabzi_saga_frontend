import { configureStore } from "@reduxjs/toolkit";

import { userReducer, profileReducer } from "./reducers/userReducer";
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
    // admin: adminReducer,
    // vendor: vendorReducer,
  },
});

export default store;

export const server = "http://localhost:4000/api/v1";
