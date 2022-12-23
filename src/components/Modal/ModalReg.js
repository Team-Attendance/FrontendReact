import React from "react";
import '../../css/modalReg.scss'
 
function Modal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="modalReg" onClick={closeModal}>
      <div className="modalRegBody" onClick={(e) => e.stopPropagation()} style={{paddingTop: '0'}}>
        <button id="modalRegCloseBtn" onClick={closeModal} style={{position: 'relative', left: '585px', fontSize: '20px', top: '12px', color: 'rgba(0, 0, 0, 0.7)'}}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}
 
export default Modal;
