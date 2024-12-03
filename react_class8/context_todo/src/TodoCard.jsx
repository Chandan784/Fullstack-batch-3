import React from "react";
import { useContext } from "react";
import { TodoContext } from "./store/Store";

function TodoCard({ todo }) {
  let { todos, setTodos } = useContext(TodoContext);

  function deleteTodo(todo) {
    let newTodos = todos.filter((e) => {
      return e != todo;
    });

    setTodos(newTodos);
  }
  return (
    <div>
      <h1>
        {todo}{" "}
        <button
          onClick={() => {
            deleteTodo(todo);
          }}
        >
          Delete
        </button>
      </h1>
    </div>
  );
}

export default TodoCard;
