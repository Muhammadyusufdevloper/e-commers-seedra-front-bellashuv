import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { api } from "./api";
import wishlistSlice from "./slice/wishlistSlice";
import authSlice from "./slice/authSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) as MiddlewareArray,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
