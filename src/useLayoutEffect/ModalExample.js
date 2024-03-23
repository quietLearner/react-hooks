import React, { useRef, useState, useEffect } from "react";

const ModalExample = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  /*
  https://blog.webdevsimplified.com/2020-07/use-layout-effect/
  In useEffect the code in the hook is run asynchronously after React renders the component. This means the code for this hook can run after the DOM is painted to the screen.
  The useLayoutEffect hook runs synchronously directly after React calculates the DOM changes but before it paints those changes to the screen. This means that useLayoutEffect code will delay the painting of a component since it runs synchronously before painting, while useEffect is asynchronous and will not delay the paint.
  
  */
  useEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    //popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>
      {show && (
        <div ref={popup} style={{ position: "absolute" }}>
          This is a popup
        </div>
      )}
    </>
  );
};

export default ModalExample;
