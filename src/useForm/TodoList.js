import React, { useRef, useState } from "react";

function createTodo(title: string) {
  return wait({ id: crypto.randomUUID(), title }, 1000);
}

function wait<T>(value: T, duration: number) {
  return (
    new Promise() <
    T >
    ((resolve) => {
      setTimeout(() => resolve(value), duration);
    })
  );
}

const TodoList = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input ref={inputRef} required />
        <br />
        <button>Create</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todos.id}>{todos.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
