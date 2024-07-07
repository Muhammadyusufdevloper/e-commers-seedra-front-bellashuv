import { api } from "./api";
import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./api/slice/wishlistSlice";
import authSlice from "./slice/authSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlistSlice,
    cart: cartSlice,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
