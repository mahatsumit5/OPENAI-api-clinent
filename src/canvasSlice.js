import { createSlice } from "@reduxjs/toolkit";
const canvasSlice = createSlice({
  name: "canvas",
  initialState: {
    show: false,
  },
  reducers: {
    setShow: (state, { payload }) => {
      state.show = payload;
    },
  },
});

const { reducer, actions } = canvasSlice;
export const { setShow } = actions;

export default reducer;
