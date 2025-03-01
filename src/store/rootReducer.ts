import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import nbpReducer from "./nbpSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  nbp: nbpReducer,
  // Dodaj inne reduktory tutaj, jeśli są
});

export default rootReducer;
