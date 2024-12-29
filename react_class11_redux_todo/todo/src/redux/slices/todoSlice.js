import { createSlice } from "@reduxjs/toolkit";

export let todo = createSlice({
  name: "todo",
  initialState: {
    loading: "",
    data: [],
    oneElementData: {},
    error: "",
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter((e) => e != action.payload);
    },
  },
});

export let { addTodo, removeTodo } = todo.actions;
export default todo.reducer;
