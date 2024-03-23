import React, { useEffect, useState, useRef } from "react";
/**
 * usage case
 * 1.  access a DOM element directly
 * 2.  store a mutable value that does not cause a re-render when updated, unlike useState
 *
 * @returns
 */
const App = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();

    // use react to manager state
    inputRef.current.value = "dont do this";
  };

  // this create a infinite loop
  //const [renderCount, setRenderCount] = useState(0);

  /**
   * this return an object literal
   * {current:0}
   */
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={handleFocus}>Focus on input</button>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
};

export default App;
