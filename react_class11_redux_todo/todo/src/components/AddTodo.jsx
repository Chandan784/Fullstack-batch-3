import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/slices/todoSlice";

function AddTodo() {
  let todoRef = useRef();

  let dispatch = useDispatch();

  function handelAddBtn() {
    dispatch(addTodo(todoRef.current.value));
  }

  return (
    <div>
      <input type="text" ref={todoRef} />
      <button onClick={handelAddBtn}>Add</button>
    </div>
  );
}

export default AddTodo;
