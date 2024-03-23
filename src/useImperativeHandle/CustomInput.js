import React, { useImperativeHandle } from "react";

const CustomInput = ({ style, ...props }, ref) => {
  console.log("props: ", props);
  console.log("style: ", style);
  console.log("ref: ", ref);

  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert("hi") };
    },
    [] //dep
  );

  return (
    <input
      // ref={ref}
      type="text"
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
};

//react-dom.development.js:86 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

export default React.forwardRef(CustomInput);
