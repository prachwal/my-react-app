// src/store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "../features/exampleSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
