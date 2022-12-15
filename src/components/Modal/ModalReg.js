import React from "react";
import '../../css/modalReg.scss'
 
function Modal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="modalReg" onClick={closeModal}>
      <div className="modalRegBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalRegCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}
 
export default Modal;
