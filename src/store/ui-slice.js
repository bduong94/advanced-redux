import { createSlice } from "@reduxjs/toolkit/";

const initialState = { show: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showCart(state) {
      state.show = !state.show;
    },
  },
});

export default uiSlice;
