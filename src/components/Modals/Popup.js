// src/components/Popup.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 600px) {
    padding: 15px;
    max-width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Popup = ({ title, children, onClose }) => {
  const handleOutsideClick = e => {
    if (e.target.id === 'popup-overlay') {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <Overlay id="popup-overlay" onClick={handleOutsideClick}>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{title}</h2>
        {children}
      </Modal>
    </Overlay>
  );
};

export default Popup;
