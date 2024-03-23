import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

//hook
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdateContext() {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  // should you pass function in context????? no
  const toggleTheme = () => {
    console.log("lol");
    setDarkTheme((prevDakrTheme) => !prevDakrTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
