import React, { useEffect, useMemo, useState } from "react";

/*
  use case:
  1. slow function
  2. Referential equality
*/

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // this is very slow, even change theme, this function will be called, why???
  /*
  when state is updated, it will rerender entire component.so every line is run from top to bottom again
  number is the depdency, only run slowFunction, when number changes 
  */
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // const themeStyles = {
  //   backgroundColor: dark ? "black" : "white",
  //   color: dark ? "white" : "black",
  // };

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  /*
    why change number, this useEffect is also called? Referential equality
    because we get a new themeStyles everytiime, we run the code.

  */
  useEffect(() => {
    console.log("themeStyles changes");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default App;
