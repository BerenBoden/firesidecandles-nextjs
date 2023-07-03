import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  open: boolean;
  products: any;
};

const initialState: InitialState = {
  open: false,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products = [...state.products, action.payload.item];
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
    setCartOpen: (state) => {
      state.open = !state.open;
    },
  },
});
export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
