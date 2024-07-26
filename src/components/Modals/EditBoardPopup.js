// src/components/EditBoardPopup.js
import React, { useState } from 'react';
import Popup from './Popup';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon from react-icons

// Import images for icons
import Icon1 from '../../images/Project.png';
import Icon2 from '../../images/star-04.png';
import Icon3 from '../../images/loading-03.png';
import Icon4 from '../../images/puzzle-piece-02.png';
import Icon5 from '../../images/container.png';
import Icon6 from '../../images/lightning-02.png';
import Icon7 from '../../images/colors.png';
import Icon8 from '../../images/hexagon-01.png';

// Styled components
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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 49px;
  padding: 10px;
  background: #88c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
  position: relative;

  & .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    color: white;
    border-radius: 8px;
    width: 28px;
    height: 28px;
    margin-right: 10px;
    font-size: 1.2em;
  }

  @media (max-width: 600px) {
    height: 40px;
    padding: 8px 16px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  padding: 5px;

  & img {
    width: 100%;
    height: 100%;
  }

  &.selected {
    border-color: #88c;
    background: #e6e6ff;
  }

  &:first-of-type img {
    filter: brightness(0);
  }
`;

const BackgroundGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const BackgroundImage = styled.div`
  width: 60px;
  height: 40px;
  background-size: cover;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &.selected {
    border-color: #88c;
  }
`;

const EditBoardPopup = ({ board, onClose, onSave }) => {
  const [title, setTitle] = useState(board.title || '');
  const [selectedIcon, setSelectedIcon] = useState(board.icon || null);
  const [selectedBackground, setSelectedBackground] = useState(
    board.background || null
  );
  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8]; // List of SVG images

  // Array of background image URLs
  const backgrounds = [
    '',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591955/diego-ph-wyeapf7Gy-U-unsplash_4_pzkt37.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591956/diego-ph-wyeapf7Gy-U-unsplash_1_2_vpt9uy.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591956/diego-ph-wyeapf7Gy-U-unsplash_3_yca7j0.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591956/diego-ph-wyeapf7Gy-U-unsplash_6_klveru.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591956/diego-ph-wyeapf7Gy-U-unsplash_1_3_wvk4ki.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591957/diego-ph-wyeapf7Gy-U-unsplash_1_4_ilbxoy.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591957/diego-ph-wyeapf7Gy-U-unsplash_8_wbbwes.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591958/diego-ph-wyeapf7Gy-U-unsplash_11_a36wej.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591958/diego-ph-wyeapf7Gy-U-unsplash_1_ljlpwm.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591959/diego-ph-wyeapf7Gy-U-unsplash_7_sbl4dk.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591960/diego-ph-wyeapf7Gy-U-unsplash_1_1_fvcuwr.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591961/diego-ph-wyeapf7Gy-U-unsplash_10_n02sp1.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591961/diego-ph-wyeapf7Gy-U-unsplash_9_loyywf.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591961/diego-ph-wyeapf7Gy-U-unsplash_5_lekbkp.png',
    'https://res.cloudinary.com/djytelvzs/image/upload/v1721591964/diego-ph-wyeapf7Gy-U-unsplash_2_pg2hcg.png',
  ];

  const handleSave = () => {
    onSave({
      ...board,
      title,
      icon: selectedIcon,
      background: selectedBackground,
    });
    onClose();
  };

  return (
    <Popup title="Edit Board" onClose={onClose}>
      <Input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <Section>
        <Title>Icons</Title>
        <IconGrid>
          {icons.map((icon, index) => (
            <Icon
              key={index}
              className={selectedIcon === icon ? 'selected' : ''}
              onClick={() => setSelectedIcon(icon)}
            >
              <img src={icon} alt={`Icon ${index}`} />
            </Icon>
          ))}
        </IconGrid>
      </Section>
      <Section>
        <Title>Background</Title>
        <BackgroundGrid>
          {backgrounds.map((url, index) => (
            <BackgroundImage
              key={index}
              style={{ backgroundImage: `url(${url})` }}
              className={selectedBackground === url ? 'selected' : ''}
              onClick={() => setSelectedBackground(url)}
            />
          ))}
        </BackgroundGrid>
      </Section>
      <Button onClick={handleSave}>
        <span className="icon-container">
          <FaPlus />
        </span>
        Save
      </Button>
    </Popup>
  );
};

export default EditBoardPopup;
