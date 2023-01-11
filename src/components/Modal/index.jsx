import { useEffect } from "react";
import PropTypes from "prop-types";
import cross from "./assets/cross.svg";

/**
 * @description Modal component that displays a message in a modal window.
 *
 * @param {Object} props - The props for the component.
 * @param {boolean} props.openModal - Flag indicating whether the modal is open or not.
 * @param {Function} props.closeModal - Function to close the modal.
 * @param {string} props.message - The message to display in the modal.
 */
const Modal = ({ openModal, closeModal, message }) => {
  /**
   * @description This is a hook that is used to detect if the modal is open or not. If it is open, it will add a
   * style to the body of the document to hide the overflow. If it is not open, it will remove the
   * style from the body of the document.
   */
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
  }, [openModal]);

  if (!openModal) return null;

  return (
    <div
      onClick={closeModal}
      data-testid={"closeModal"}
      className="modal"
      aria-label="modal"
    >
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
          aria-label="close modal button"
          onClick={closeModal}
          data-testid={"closeModalBnt"}
        >
          <img src={cross} className="crossImage" alt="cross"></img>
        </button>
      </div>
    </div>
  );
};

/**
 * Proptypes for the Modal component.
 */
Modal.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
  message: PropTypes.string,
};

export default Modal;
