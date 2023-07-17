import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  quantity: number;
};

type InitialState = {
  open: boolean;
  products: Product[];
  total: number;
};

// Try to load the state from local storage
let savedState;
if (typeof window !== "undefined") {
  savedState = localStorage.getItem("cart");
}
const initialState: InitialState = savedState
  ? JSON.parse(savedState)
  : {
      open: false,
      products: [],
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({ id: action.payload.id, quantity: 1 });
      }
      state.total = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      ); // recalculate the total quantity
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeProductFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
          state.products = state.products.filter(
            (p) => p.id !== action.payload.id
          );
        }
      }
      state.total = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      ); // recalculate the total quantity
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setCartOpen: (state) => {
      state.open = !state.open;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addProductToCart, removeProductFromCart, setCartOpen } =
  cartSlice.actions;
export default cartSlice.reducer;
