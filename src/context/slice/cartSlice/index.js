import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...payload, amount: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter((el) => el.id !== payload.id);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    increaseAmount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((el, inx) => {
        if (index === inx) {
          return { ...el, amount: el.amount + 1 };
        } else {
          return el;
        }
      });
    },
    decreaseAmount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((el, inx) => {
        return index === inx ? { ...el, amount: el.amount - 1 } : el;
      });
    },
    removeAll: (state) => {
      state.value = [];
    },
  },
});

export const { add, remove, increaseAmount, decreaseAmount, removeAll } =
  cartSlice.actions;
export default cartSlice.reducer;
