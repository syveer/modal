// src/App.js
import React, { useState } from 'react';
import NewBoardPopup from './components/Modals/NewBoardPopup';
import NeedHelpPopup from './components/Modals/NeedHelpPopup';
import AddCardPopup from './components/Modals/AddCardPopup';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Modal from './components/Modals/Modal/Modal';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background: #88c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #77b;
  }
`;

function App() {
  const [showNewBoard, setShowNewBoard] = useState(false);
  const [showNeedHelp, setShowNeedHelp] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [showModal, setShowModal] = useState(null); // 'register' or 'login'

  const handleOpenModal = type => setShowModal(type);
  const handleCloseModal = () => setShowModal(null);

  const modalContent = {
    register: {
      title: 'Register',
      inputs: [
        { type: 'text', placeholder: 'Enter your name' },
        { type: 'email', placeholder: 'Enter your email' },
        { type: 'password', placeholder: 'Create your password' },
      ],
      onSubmit: () => {
        // Handle register submission
        handleCloseModal();
      },
      onSwitch: type => handleOpenModal(type),
    },
    login: {
      title: 'Login',
      inputs: [
        { type: 'email', placeholder: 'Enter your email' },
        { type: 'password', placeholder: 'Confirm your password' },
      ],
      onSubmit: () => {
        // Handle login submission
        handleCloseModal();
      },
      onSwitch: type => handleOpenModal(type),
    },
  };

  return (
    <>
      <GlobalStyle />
      {showWelcomePage ? (
        <WelcomePage
          onStart={() => setShowWelcomePage(false)}
          onRegisterClick={() => handleOpenModal('register')}
          onLoginClick={() => handleOpenModal('login')}
        />
      ) : (
        <AppWrapper>
          <Button onClick={() => setShowNewBoard(true)}>New Board</Button>
          <Button onClick={() => setShowNeedHelp(true)}>Need Help</Button>
          <Button onClick={() => setShowAddCard(true)}>Add Card</Button>

          {showNewBoard && (
            <NewBoardPopup onClose={() => setShowNewBoard(false)} />
          )}
          {showNeedHelp && (
            <NeedHelpPopup onClose={() => setShowNeedHelp(false)} />
          )}
          {showAddCard && (
            <AddCardPopup onClose={() => setShowAddCard(false)} />
          )}
        </AppWrapper>
      )}

      {showModal && (
        <Modal
          title={modalContent[showModal].title}
          inputs={modalContent[showModal].inputs}
          onClose={handleCloseModal}
          onSubmit={modalContent[showModal].onSubmit}
          onSwitch={modalContent[showModal].onSwitch}
        />
      )}
    </>
  );
}

export default App;
