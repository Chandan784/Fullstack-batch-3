import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slices/todoSlice";

let store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
