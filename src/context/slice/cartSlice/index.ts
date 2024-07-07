import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  amount: number;
  name: string;
  price: number;
}

interface CartState {
  value: CartItem[];
}

const initialState: CartState = {
  value: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value.push({ ...action.payload, amount: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    increaseAmount: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index !== -1) {
        state.value[index].amount += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decreaseAmount: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index !== -1 && state.value[index].amount > 1) {
        state.value[index].amount -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeAll: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { add, remove, increaseAmount, decreaseAmount, removeAll } =
  cartSlice.actions;
export default cartSlice.reducer;
