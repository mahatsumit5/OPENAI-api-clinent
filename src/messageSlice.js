import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: [],
  },
  reducers: {
    setChat: (state, { payload }) => {
      state.chat = [...state.chat, payload];
    },
  },
});

const { reducer, actions } = chatSlice;
export const { setChat } = actions;

export default reducer;
