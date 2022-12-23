import React from "react";
import './qrModal.scss'

function QrModal(props) {

  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="Modal qr-modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      
      </div>
    </div>
  );
}

export default QrModal;
