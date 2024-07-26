// src/components/NeedHelpPopup.js
import React from 'react';
import Popup from './Popup';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 49px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: 40px;
    padding: 8px;
    margin: 8px 0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  resize: vertical;

  @media (max-width: 600px) {
    height: 100px;
    padding: 8px;
    margin: 8px 0;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #88c;
  height: 49px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  @media (max-width: 600px) {
    height: 40px;
    padding: 8px 16px;
  }
`;

const NeedHelpPopup = ({ onClose }) => {
  return (
    <Popup title="Need Help" onClose={onClose}>
      <Input type="email" placeholder="Email address" />
      <TextArea placeholder="Comment" />
      <Button>Send</Button>
    </Popup>
  );
};

export default NeedHelpPopup;
