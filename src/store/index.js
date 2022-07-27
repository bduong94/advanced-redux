import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

const uiActions = uiSlice.actions;
const cartActions = cartSlice.actions;

export { store, uiActions, cartActions };
