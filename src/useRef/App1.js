import React, { useEffect, useState, useRef } from "react";
/**
 * usage case
 * 1.  access a DOM element directly
 * 2.  store a mutable value that does not cause a re-render when updated, unlike useState
 *
 * @returns
 */
const App1 = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
};

export default App1;
