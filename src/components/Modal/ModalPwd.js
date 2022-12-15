import React from "react";
import '../../css/modalPwdReg.scss'
 
function Modal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="PwdModal" onClick={closeModal}>
      <div className="modalPwdRegBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalPwdCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}
 
export default Modal;
