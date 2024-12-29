import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";
function TodoList() {
  let { data } = useSelector((store) => store.todo);

  let dispatch = useDispatch();

  function handelDeleteBtn(todo) {
    console.log(todo);

    dispatch(removeTodo(todo));
  }
  return (
    <div>
      {data.map((todo) => {
        return (
          <h1>
            {todo}{" "}
            <button
              onClick={() => {
                handelDeleteBtn(todo);
              }}
            >
              delete
            </button>
          </h1>
        );
      })}
    </div>
  );
}

export default TodoList;
