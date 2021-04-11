import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Form = ({ setShow }) => {
  const modalRef = useRef();
  const updateShow = (evt) => {
    if (evt.target == modalRef.current) {
      setShow();
    }
  };
  return (
    <div ref={modalRef} onClick={updateShow} className="modal">
      <div className="card">
        <div onClick={setShow} className="close">
          <FontAwesomeIcon className="mx-1" icon={faTimes} />
        </div>
        hello from card
      </div>
    </div>
  );
};
export default Form;
