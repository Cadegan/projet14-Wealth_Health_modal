import { useEffect } from "react";
import PropTypes from "prop-types";
import cross from "./assets/cross.svg";

const Modal = ({ openModal, closeModal, message }) => {
  /* This is a hook that is used to detect if the modal is open or not. If it is open, it will add a
  style to the body of the document to hide the overflow. If it is not open, it will remove the
  style from the body of the document. */
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
  }, [openModal]);

  if (!openModal) return null;

  return (
    <div onClick={closeModal} data-testid={"closeModal"} className="modal">
      <div
        className="modalWrapper"
        data-testid={"modalWrapper"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalContent">
          <span data-testid={"message"}>{message}</span>
        </div>
        <button
          className="closeModalBnt"
          onClick={closeModal}
          data-testid={"closeModalBnt"}
        >
          <img src={cross} className="crossImage" alt="cross"></img>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
  message: PropTypes.string,
};

export default Modal;
