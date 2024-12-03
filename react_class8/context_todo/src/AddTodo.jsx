import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { TodoContext } from "./store/Store";

function AddTodo() {
  let todoRef = useRef();

  let { todos, setTodos } = useContext(TodoContext);
  console.log(todos);

  function addData(e) {
    e.preventDefault();
    setTodos([...todos, todoRef.current.value]);
  }

  return (
    <div>
      <form action="">
        <input type="text" ref={todoRef} placeholder="enter your todo" />
        <button onClick={addData}>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
