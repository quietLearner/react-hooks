import React from "react";
import { useTheme, useThemeUpdateContext } from "./ThemeContext";

const FunctionContextComponent1 = () => {
  console.log("FunctionContextComponent1");
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdateContext();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};

export default FunctionContextComponent1;
