import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DaysState {
  value: number;
}

const initialState: DaysState = {
  value: 10,
};

export const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    setDays: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setDays } = daysSlice.actions;
export default daysSlice.reducer;
