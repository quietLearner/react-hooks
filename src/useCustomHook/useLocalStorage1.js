import { useEffect, useState } from "react";

/**
 * custom hook of my version
 * @returns
 */
const useLocalStorage1 = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("load name from local storage");
    const savedVal = window.localStorage.getItem("name");
    if (savedVal) {
      setName(savedVal);
    }
  }, []);

  const saveName = (e) => {
    console.log("save name from local storage");
    setName(e.target.value);
    window.localStorage.setItem("name", name);
  };

  return { name, saveName };
};

export default useLocalStorage1;
