import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counters/counter";


export const store = configureStore({
  reducer: {
    profile: counterReducer,
  },  
});
