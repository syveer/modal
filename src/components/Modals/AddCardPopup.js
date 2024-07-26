// src/components/AddCardPopup.js
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
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #88c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddCardPopup = ({ onClose }) => {
  return (
    <Popup title="Add Card" onClose={onClose}>
      <Input type="text" placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button>Add</Button>
    </Popup>
  );
};

export default AddCardPopup;
