import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  quantity: number;
};

type InitialState = {
  open: boolean;
  products: Product[];
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
        product.quantity += 1; // increment quantity if product already exists in cart
      } else {
        state.products.push({ id: action.payload.id, quantity: 1 }); // add product to cart with quantity 1 if it doesn't exist yet
      }
      // Save the state to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeProductFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity -= 1; // decrement quantity
        if (product.quantity <= 0) {
          state.products = state.products.filter(
            (p) => p.id !== action.payload.id
          ); // remove product from cart if quantity is 0 or less
        }
      }
      // Save the state to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setCartOpen: (state) => {
      state.open = !state.open;
      // Save the state to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addProductToCart, removeProductFromCart, setCartOpen } =
  cartSlice.actions;
export default cartSlice.reducer;
