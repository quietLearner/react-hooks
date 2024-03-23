import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

const App = () => {
  //   const [name, setName] = useState("");

  //   useEffect(() => {
  //     console.log("load name from local storage");
  //     const name = window.localStorage.getItem("name");
  //     if (name) {
  //       setName(name);
  //     }
  //   }, []);

  //   const handleSave = (e) => {
  //     console.log("save name from local storage");
  //     setName(e.target.value);
  //     window.localStorage.setItem("name", name);
  //   };
  const [name, setName] = useLocalStorage("name", "");

  useUpdateLogger(name);

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    ></input>
  );
};

export default App;
