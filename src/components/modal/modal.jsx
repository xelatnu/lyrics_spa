import React from 'react';

const Modal = () => (
  <div
    className="modal-container"
    style={{
      background: 'rgba(0, 0, 0, 0.834)',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      zIndex: '1',
    }}
  >
    <h3
      style={{
        color: 'red',
      }}
    >
      Probably incorrect artist or lyrics. Please try again only with lyrics search criteria.

    </h3>
  </div>
);

export default Modal;
