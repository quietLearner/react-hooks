import React from "react";
import { ACTIONS } from "./App";

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span
        style={{ fontSize: "50px", color: todo.completed ? "red" : "green" }}
      >
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.UPDATE_TODO, payload: { todo } })
        }
      >
        Update
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { todo } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
