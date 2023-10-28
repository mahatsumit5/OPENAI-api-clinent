import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
// these will store data in webstorage
import canvasReducer from "./canvasSlice";
import chatReducer from "./messageSlice";
export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    chatList: chatReducer,
  },
});
