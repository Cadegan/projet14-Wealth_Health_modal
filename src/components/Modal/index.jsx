const Modal = ({ open, closeModal }) => {
  if (!open) return null;
  return (
    <div onClick={closeModal} className="modal">
      <div
        className="modalWrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="modalCloseBnt" onClick={closeModal}>
          X
        </p>
        <div className="modalContent">
          <span>Employee Created!</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
