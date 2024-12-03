import { createContext } from "react";
import { useState } from "react";

export let TodoContext = createContext({});

export function TodoProvider({ children }) {
  let [todos, setTodos] = useState([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
