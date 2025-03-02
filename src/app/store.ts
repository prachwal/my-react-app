import { configureStore } from "@reduxjs/toolkit";
import daysReducer from "../slices/daysSlice";
import counterReducer from "../slices/counterSlice";
import nbpReducer from "../slices/nbpSlice";
import historicalRatesReducer from "../slices/historicalSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    nbp: nbpReducer,
    historicalRates: historicalRatesReducer,
    days: daysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
