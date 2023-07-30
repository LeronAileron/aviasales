import { createSlice } from "@reduxjs/toolkit";

const mostSortSlice = createSlice({
  name: "most",
  initialState: {
    most: "cheap",
  },
  reducers: {
    selectMost(state, action) {
      state.most = action.payload.most;
    },
  },
});

export const { selectMost } = mostSortSlice.actions;

export default mostSortSlice.reducer;
