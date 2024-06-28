import { User } from "@/interfaces/user";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isLoading: boolean;
  currentUser: User | null;
}

const initialState: AuthState = {
  isLoading: false,
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      const userPayload = action.payload;
      return {
        ...state,
        currentUser: userPayload,
        isLoading: false,
      };
    },
  },
});

export default authSlice.reducer;

export const { setLoadingState, setCurrentUser } = authSlice.actions;
