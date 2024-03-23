import React, { useReducer, useState } from "react";
import Todo from "./Todo";

// as redux
export const ACTIONS = {
  ADD_TODO: "add_todo",
  UPDATE_TODO: "update_todo",
  DELETE_TODO: "delete_todo",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.UPDATE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.todo.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

const App = () => {
  //todos is []
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  //   const handleUpdate = (todo) => {
  //     console.log("update ", todo);
  //     dispatch({ type: ACTIONS.UPDATE_TODO, payload: { todo } });
  //   };

  //   const handleDelete = (todo) => {
  //     console.log("delete ", todo);
  //     dispatch({ type: ACTIONS.DELETE_TODO, payload: { todo } });
  //   };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* only pass dispatch, intead of handleUpdate, handleDelete etc, just ONE */}
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
};

export default App;
