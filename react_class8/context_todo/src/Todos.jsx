import React from "react";
import { useContext } from "react";
import { TodoContext } from "./store/Store";
import TodoCard from "./TodoCard";
TodoContext;
function Todos() {
  let { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.length == 0 ? (
        <h1>no todos avilable</h1>
      ) : (
        todos.map((todo) => {
          return <TodoCard todo={todo} />;
        })
      )}
    </div>
  );
}

export default Todos;
