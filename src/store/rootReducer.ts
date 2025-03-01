import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import nbpReducer from "../components/NbpTable/nbpSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  nbp: nbpReducer,
  // Dodaj inne reduktory tutaj, jeśli są
});

export default rootReducer;
