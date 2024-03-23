import React, { useImperativeHandle, useRef } from "react";

const ConfirmationModal = ({ isOpen, onClose }, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  // this is the things, the ref needs to do
  useImperativeHandle(
    ref,
    () => {
      return {
        focusCloseBtn: () =>
          closeRef.current ? closeRef.current.focus() : null,
        focusConfirmBtn: () =>
          confirmRef.current ? confirmRef.current.focus() : null,
        focusDenyBtn: () => (denyRef.current ? denyRef.current.focus() : null),
      };
    },
    [] //dep
  );

  if (!isOpen) return null;

  return (
    // <div className="modal" ref={ref}>
    <div className="modal">
      <button className="close-btn" ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
        <h1>Title</h1>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div className="modal-footer">
        <button ref={confirmRef} onClick={onClose}>
          Yes
        </button>
        <button ref={denyRef} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default React.forwardRef(ConfirmationModal);
