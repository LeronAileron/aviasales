import { createSlice } from "@reduxjs/toolkit";

const transferSlice = createSlice({
  name: "transfer",
  initialState: {
    transfer: [],
  },
  reducers: {
    addTransferType(state, action) {
      state.transfer.push(action.payload.transfer);
    },
    removeTransferType(state, action) {
      state.transfer = state.transfer.filter(
        (option) => option !== action.payload.transfer,
      );
    },
    checkAll(state, action) {
      state.transfer = action.payload.transfer;
    },
    uncheckAll(state) {
      state.transfer = [];
    },
  },
});

export const { addTransferType, removeTransferType, checkAll, uncheckAll } =
  transferSlice.actions;

export default transferSlice.reducer;
