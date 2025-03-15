export const ModalDialog = ({ children, title, onClose }) => {
  const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const modalContent = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "500px",
    position: "relative",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
