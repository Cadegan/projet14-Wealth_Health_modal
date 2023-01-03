import { useEffect } from "react";

const Modal = ({ openModal, closeModal, message }) => {
  /* This is a hook that is used to detect if the modal is open or not. If it is open, it will add a
  style to the body of the document to hide the overflow. If it is not open, it will remove the
  style from the body of the document. */
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
  }, [openModal]);

  if (!openModal) return null;

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
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
