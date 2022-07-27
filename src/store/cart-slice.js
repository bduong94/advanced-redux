import { createSlice } from "@reduxjs/toolkit/";

const initialUIState = { show: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    showCart(state) {
      state.show = !state.show;
    },
  },
});

export default uiSlice;
