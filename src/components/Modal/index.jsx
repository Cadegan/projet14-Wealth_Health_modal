import { useEffect } from "react";

const Modal = ({ openModal, closeModal }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  });

  if (!openModal) {
    return null;
  } else {
    return (
      <div onClick={closeModal} className="modal">
        <div
          className="modalWrapper"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="closeModalBnt" onClick={closeModal}>
            X
          </div>
          <div className="modalContent">
            <span>Employee Created!</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
