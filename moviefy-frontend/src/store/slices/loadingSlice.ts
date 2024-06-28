import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = false;

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoadingState: (_state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
    toggleLoadingState: (state) => {
      return !state;
    },
  },
});

export default loadingSlice.reducer;

export const { setLoadingState, toggleLoadingState } = loadingSlice.actions;
