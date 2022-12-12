import { useEffect } from "react";

const Modal = ({ openModal, closeModal }) => {
  /* This is a hook that is used to detect if the modal is open or not. If it is open, it will add a
  style to the body of the document to hide the overflow. If it is not open, it will remove the
  style from the body of the document. */
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [openModal]);

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
