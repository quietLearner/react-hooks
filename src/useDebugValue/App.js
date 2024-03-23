import React, { useState } from "react";
import useLocalStorage from "../useCustomHook/useLocalStorage";
/*
https://blog.webdevsimplified.com/2021-11/use-debug-value/
*/
const App = () => {
  const [firstName, setFirstName] = useLocalStorage("firstName", "kyle");
  const [lastName, setLastName] = useState("Cook");

  return (
    <>
      First:{" "}
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      Last:{" "}
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </>
  );
};

export default App;
