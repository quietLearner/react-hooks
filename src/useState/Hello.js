import React, { useState } from "react";

const Hello = () => {
  // use obj literal is not good idea. better to split them into 2 states
  /*
    const [count, setCount] = useState(30);
    const [color, setColor] = useColor("blue");
   */

  const [state, setState] = useState({ count: 20, color: "red" });
  const count = state.count;
  const color = state.color;

  const hendleDecrement = () => {
    setState((prevState) => {
      //return { count: prevState.count - 1 }; // this works, but all the other prop will be gone
      return { ...state, count: prevState.count - 1 };
    });
  };

  const hendleIncrement = () => {
    setState((prevState) => {
      // return { count: prevState.count + 1 };
      return { ...state, count: prevState.count + 1 };
    });
  };

  return (
    <>
      <button onClick={hendleDecrement}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={hendleIncrement}>+</button>
      <br />
    </>
  );
};

export default Hello;
