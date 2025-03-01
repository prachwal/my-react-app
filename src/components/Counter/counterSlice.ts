import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => ({ ...state, value: state.value + 1 }),
    decrement: (state) => ({ ...state, value: state.value - 1 }),
    reset: (state, action: PayloadAction<{ value: number }>) => ({
      ...state,
      value: action.payload.value,
    }),
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
