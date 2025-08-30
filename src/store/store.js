import { configureStore } from "@reduxjs/toolkit";
import extraReducer from "./slices/extraSlice";
import authReducer from "./slices/authSlice";
import adminReducer from "./slices/adminSlice";
import productReducer from "./slices/productsSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    extra: extraReducer,
    auth: authReducer,
    admin: adminReducer,
    product: productReducer,
    order: orderReducer,
  },
});
