import { configureStore } from "@reduxjs/toolkit";
import converterReducer from "./features/converterSlice";

const store = configureStore({
  reducer: {
    options: converterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
