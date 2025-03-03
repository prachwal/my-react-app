import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: string | null; // Nowa właściwość
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null, // Inicjalizacja nowej właściwości
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn(
      state,
      action: PayloadAction<{ isLoggedIn: boolean; user: string | null }>,
    ) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user; // Aktualizacja nowej właściwości
    },
  },
});

export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
