import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: false,
  cart: [],
};

const userProgressSlice = createSlice({
  name: "userProgress",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartVisible = !state.isCartVisible;
      console.log(state);
    },
  },
});

const cartClise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartVisible = !state.isCartVisible;
      console.log(state);
    },
  },
});

export const store = configureStore({ reducer: userProgressSlice.reducer });

export const { toggleCart } = userProgressSlice.actions;
