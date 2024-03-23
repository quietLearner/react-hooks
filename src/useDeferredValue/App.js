import React, { useState } from "react";
import List from "./List";

/*
deferred value hook This works in a very similar way to debouncing and throttling

it will render 2, instead of 1 in one shot
https://blog.webdevsimplified.com/2022-05/use-deferred-value/
*/

const App = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value); // this is faster, render input(state) first
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <List input={input}></List>
    </>
  );
};

export default App;
