import React, { useEffect, useState } from "react";

const App1 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  //side effect, in function we dont have lifecycle hooks, but we have effect
  useEffect(() => {
    //do we need to remove the event listener?
    window.addEventListener("resize", handleResize);

    return () => {
      console.log(
        "clean up, remove event listner when App1 component is done!"
      );
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>window inner width: {width}</div>;
};

export default App1;
