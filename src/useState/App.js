import { useState } from "react";
import Hello from "./Hello";

function valueInit() {
  console.log("value init 10");
  return 20;
}

function valInit() {
  console.log("val init 5");
  return 5;
}

function App() {
  // this will run everytime
  const [a, setA] = useState(4);
  // this will run everytime, App component renders
  const [value, setValue] = useState(valueInit());

  // run once
  const [val, setVal] = useState(valInit);

  // this only run once when component is init
  const [count, setCount] = useState(() => {
    console.log("only run once");
    return 10;
  });

  const hendleDecrement = () => {
    // count never change, so no matter how many time setCount() is called, still decrease by 1
    // setCount(count - 1);
    // setCount(count - 1);

    setCount((prevCount) => prevCount - 1); // decrease by 1
    //setCount((prevCount) => prevCount - 1); // decrease by 1 again
  };

  const hendleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <button onClick={hendleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={hendleIncrement}>+</button>
      <br />
      <Hello />
    </>
  );
}

export default App;
