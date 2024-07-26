// src/components/Dashboard.js
import React, { useState } from 'react';
import EditBoardPopup from './EditBoardPopup';
import NewBoardPopup from './NewBoardPopup';
import NeedHelpPopup from './NeedHelpPopup'; // Assuming you want to use this as well
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const Board = styled.div`
  background: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditButton = styled.button`
  background: #88c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Dashboard = () => {
  const [boards, setBoards] = useState([
    { id: 1, title: 'Sample Board 1', icon: null, background: null },
    // Add more sample boards as needed
  ]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isNewBoardPopupOpen, setIsNewBoardPopupOpen] = useState(false);
  const [isNeedHelpPopupOpen, setIsNeedHelpPopupOpen] = useState(false);

  const handleEditBoard = board => {
    setSelectedBoard(board);
    setIsEditPopupOpen(true);
  };

  const handleSaveBoard = updatedBoard => {
    setBoards(
      boards.map(board => (board.id === updatedBoard.id ? updatedBoard : board))
    );
  };

  return (
    <DashboardContainer>
      <button onClick={() => setIsNewBoardPopupOpen(true)}>New Board</button>
      {boards.map(board => (
        <Board key={board.id}>
          <div>
            <h3>{board.title}</h3>
          </div>
          <EditButton onClick={() => handleEditBoard(board)}>Edit</EditButton>
        </Board>
      ))}
      {isEditPopupOpen && (
        <EditBoardPopup
          board={selectedBoard}
          onClose={() => setIsEditPopupOpen(false)}
          onSave={handleSaveBoard}
        />
      )}
      {isNewBoardPopupOpen && (
        <NewBoardPopup onClose={() => setIsNewBoardPopupOpen(false)} />
      )}
      <button onClick={() => setIsNeedHelpPopupOpen(true)}>Need Help</button>
      {isNeedHelpPopupOpen && (
        <NeedHelpPopup onClose={() => setIsNeedHelpPopupOpen(false)} />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
