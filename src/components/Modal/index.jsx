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
        <div className="modalCloseBnt" onClick={closeModal}>
          X
        </div>
        <div className="modalContent">
          <span>Employee Created!</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
