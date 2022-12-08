const Modal = ({ openModal, closeModal }) => {
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
          <span>Employee Created!</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
