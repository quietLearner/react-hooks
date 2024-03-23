import { useEffect, useState, useDebugValue } from "react";

/**
 * custom hook
 * @returns
 */

function getLocalStorage(key, initVal) {
  console.log("load value from local storage");
  const savedVal = JSON.parse(window.localStorage.getItem(key));
  if (savedVal) {
    return savedVal;
  }

  if (initVal instanceof Function) {
    return initVal();
  }

  return initVal;
}

const useLocalStorage = (key, initVal) => {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, initVal);
  });

  //only work in custom hook
  useDebugValue("hi");
  useDebugValue([key, value]);

  useEffect(() => {
    console.log("save name to local storage");
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
