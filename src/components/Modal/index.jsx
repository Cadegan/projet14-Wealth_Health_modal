const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="modal">
      <div
        className="modalWrapper"
        // onClick={(e) => {
        //   e.stopPropagation();
        // }}
      >
        <p className="modalCloseBnt" onClick={onClose}>
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
