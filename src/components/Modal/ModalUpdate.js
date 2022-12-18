import React from "react";
import '../../css/modalUpdate.scss'
 
function ModalUpdate(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="modalUpdate" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}
 
export default ModalUpdate;
