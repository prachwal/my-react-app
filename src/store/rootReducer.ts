import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  // Dodaj inne reduktory tutaj, jeśli są
});

export default rootReducer;
