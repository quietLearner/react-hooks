import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <div>{count}</div>
    </>
  );
};

export default App;
