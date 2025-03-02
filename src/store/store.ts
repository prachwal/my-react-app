import { configureStore } from "@reduxjs/toolkit";
import daysReducer from "../slices/daysSlice";
import counterReducer from "../slices/counterSlice";
import nbpReducer from "../slices/nbpSlice";
import historicalRatesReducer from "../slices/historicalSlice";
import languageReducer from "../slices/languageSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    nbp: nbpReducer,
    historicalRates: historicalRatesReducer,
    days: daysReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
