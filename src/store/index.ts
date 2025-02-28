import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Ensure that the file ./rootReducer.ts exists

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
