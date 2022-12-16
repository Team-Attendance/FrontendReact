import React from "react";
import './BizHourModal.scss'
 
function BizHourModal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="BizHourModal" onClick={closeModal}>
      <div className="BizHourmodalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}
 
export default BizHourModal;
