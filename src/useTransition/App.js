import React, { useState, useTransition } from "react";

/*
useTransition Hook Explained
https://blog.webdevsimplified.com/2022-04/use-transition/
*/

const App = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  /*
  slow funtion, takes long time to run, so the user freeze/sluggish on the screen
  by default, all state is same(high) priority
  */
  function handleChange(e) {
    setInput(e.target.value); // this is faster, render input(state) first

    // all this code(state) is low priority, do not abuse.
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l); // this is very slow
    });
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
};

export default App;
