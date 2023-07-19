import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  quantity: number;
};

type CartType = "wishlist" | "cart"; // new type for the cart type

type InitialState = {
  openState: { type: CartType; open: boolean };
  cart: {
    products: Product[];
    total: number;
  };
  wishlist: {
    products: Product[];
    total: number;
  };
};

// Try to load the state from local storage
let cartState;
let wishlistState;
if (typeof window !== "undefined") {
  cartState = localStorage.getItem("cart");
  wishlistState = localStorage.getItem("wishlist");
}
const initialState: InitialState = {
  openState: {
    type: "cart",
    open: false,
  },
  cart: cartState ? { ...JSON.parse(cartState) } : { products: [], total: 0 },
  wishlist: wishlistState
    ? { ...JSON.parse(wishlistState) }
    : { products: [], total: 0 },
};

export const itemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    addProductToItemList: (
      state,
      action: PayloadAction<{ id: number; type: CartType }>
    ) => {
      const product = state[action.payload.type].products.find(
        (p) => p.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        state[action.payload.type].products.push({
          id: action.payload.id,
          quantity: 1,
        });
      }
      state[action.payload.type].total = state[
        action.payload.type
      ].products.reduce((total, product) => total + product.quantity, 0); // recalculate the total quantity
      localStorage.setItem(
        action.payload.type,
        JSON.stringify(state[action.payload.type])
      );
    },
    removeProductFromItemList: (
      state,
      action: PayloadAction<{ id: number; type: CartType }>
    ) => {
      const product = state[action.payload.type].products.find(
        (p) => p.id === action.payload.id
      );
      if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
          state[action.payload.type].products = state[
            action.payload.type
          ].products.filter((p) => p.id !== action.payload.id);
        }
      }
      state[action.payload.type].total = state[
        action.payload.type
      ].products.reduce((total, product) => total + product.quantity, 0); // recalculate the total quantity
      localStorage.setItem(
        action.payload.type,
        JSON.stringify(state[action.payload.type])
      );
    },
    setItemListOpen: (state, action: PayloadAction<{ type: CartType }>) => {
      state.openState.open = !state.openState.open;
      state.openState.type = action.payload.type;
    },
  },
});

export const {
  addProductToItemList,
  removeProductFromItemList,
  setItemListOpen,
} = itemListSlice.actions;
export default itemListSlice.reducer;
