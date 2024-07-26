// src/components/Modal/Modal.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  ModalBackground,
  ModalContainer,
  Input,
  SubmitButton,
  ModalBody,
  ModalHeader,
  HeaderButton,
  ButtonGroup,
  PasswordWrapper,
  ErrorMessage,
  EyeIcon,
} from './Modal.styled';

const Modal = ({ inputs, onClose, onSubmit, onSwitch }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = e => {
    const value = e.target.value;
    setPassword(value);

    // Validare parolă
    if (value.length < 8 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
      setError(
        'Password must be at least 8 characters long and include uppercase letters and numbers.'
      );
    } else {
      setError('');
    }
  };

  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContainer>
        <ModalHeader>
          <ButtonGroup>
            <HeaderButton onClick={() => onSwitch('register')} active>
              Register
            </HeaderButton>
            <HeaderButton onClick={() => onSwitch('login')}>Login</HeaderButton>
          </ButtonGroup>
        </ModalHeader>
        <ModalBody>
          {inputs.map((input, index) =>
            input.type === 'password' ? (
              <PasswordWrapper key={index}>
                <Input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder={input.placeholder}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <EyeIcon onClick={handlePasswordToggle}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </EyeIcon>
              </PasswordWrapper>
            ) : (
              <Input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
              />
            )
          )}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SubmitButton onClick={onSubmit}>Register Now</SubmitButton>
        </ModalBody>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
