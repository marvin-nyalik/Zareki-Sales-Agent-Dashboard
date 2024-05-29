import React from 'react';
import Modal from 'react-modal';

const CollectionModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-content">
        <h2>Collect Payment</h2>
        <p>This is the modal content.</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </Modal>
  );
};

export default CollectionModal;
