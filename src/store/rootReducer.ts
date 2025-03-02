import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import nbpReducer from "./nbpSlice";
import historicalRatesReducer from "./historicalSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  nbp: nbpReducer,
  historicalRates: historicalRatesReducer,
  // Dodaj inne reduktory tutaj, jeśli są
});

export default rootReducer;
