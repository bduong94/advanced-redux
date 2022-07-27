import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = { show: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.show = !state.show;
    },
  },
});

const store = configureStore({ reducer: { cart: cartSlice.reducer } });
const cartActions = cartSlice.actions;
export { store, cartActions };
