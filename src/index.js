import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./useHook/App";
// import AppCM from "./useImperativeHandle/AppCM";
//import ModalExample from "./useLayoutEffect/ModalExample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppCM /> */}
    {/* <ModalExample /> */}
  </React.StrictMode>
);
