import React from 'react';

const Modal = () => (
  <div
    className="modal-container"
    style={{
      margin: '20px',
      background: 'rgba(40, 44, 52, 0.834)',
      // display: 'flex',
      // justifyContent: 'center',
    }}
  >
    <h3
      style={{
        color: 'fff',
      }}
    >
      Oops! Something went wrong. Please try again later.
    </h3>
  </div>
);

export default Modal;
