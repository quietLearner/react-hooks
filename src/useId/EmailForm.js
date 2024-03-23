import React, { useId, useRef } from "react";

const EmailForm = () => {
  //   const id = Math.random();
  const id = useId();
  const inputRef = useRef(); //useRef instead of querySelector

  //Failed to execute 'querySelector' on 'Document': ':r1:' is not a valid selector.
  // document.querySelector(":r1:");

  return (
    <>
      <label htmlFor={`${id}-email`}>Email: </label>
      {/* <input type="email" id="email" /> */}
      <input ref={inputRef} type="email" id={`${id}-email`} />
      <br />
      <label htmlFor={`${id}-name`}>Name: </label>
      <input ref={inputRef} type="text" id={`${id}-name`} />
    </>
  );
};

export default EmailForm;
