import React, { useCallback, useMemo, useState } from "react";
import List from "./List";

const App = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // this is not workig, getItems is not a function
  //   const getItems = useMemo(() => {
  //     return [number, number + 1, number + 2];
  //   }, [number]);

  /*
   when click toogle theme, getItems is recrated when App render
   similar to useMemo()

    useMemo(), take function, return the value of that function
    useCallback(), return a function
  */
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  //we get a new theme everytiime, we run the code, it will cause issue when useEffect(..., [theme])
  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
        />
        <br />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle Theme
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
};

export default App;
