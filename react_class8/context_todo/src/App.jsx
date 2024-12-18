import React from "react";
import { useRef } from "react";
import { useState } from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { TodoProvider } from "./store/Store";
function App() {
  localStorage.removeItem("name");
  return (
    <div>
      <TodoProvider>
        <AddTodo />
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
