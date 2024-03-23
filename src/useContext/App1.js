import React from "react";
import FunctionContextComponent1 from "./FunctionContextComponent1";
import { ThemeProvider } from "./ThemeContext";

const App1 = () => {
  console.log("App1");
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent1 />
      </ThemeProvider>
    </>
  );
};

export default App1;
