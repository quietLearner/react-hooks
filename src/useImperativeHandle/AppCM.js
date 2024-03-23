import React, { useRef, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const AppCM = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button
        onClick={
          () => (modalRef.current ? modalRef.current.focusCloseBtn() : null)
          //   modalRef.current.focusCloseBtn()
        }
      >
        Focus Close Button
      </button>
      <button
        onClick={() =>
          modalRef.current ? modalRef.current.focusConfirmBtn() : null
        }
      >
        Focus Confirm Button
      </button>
      <button
        onClick={() =>
          modalRef.current ? modalRef.current.focusDenyBtn() : null
        }
      >
        Focus Deny Button
      </button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default AppCM;
