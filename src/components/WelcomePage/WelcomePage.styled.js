import styled, { keyframes } from 'styled-components';

// Define the new wave animation
const waveAnimation = keyframes`
  0% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
`;

// Main container
export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 922px; /* Ensure the background covers the entire screen height */
  width: 100%; /* Ensure the background covers the entire screen width */
  background: linear-gradient(
    315deg,
    #8c9a5b 3%,
    #a1b48a 38%,
    #e0e0e0 68%,
    #f7f7f7 98%
  );
  background-size: 400% 400%; /* Adjust background size for the animation */
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  animation: ${waveAnimation} 25s ease infinite;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

export const Icon = styled.img`
  width: 162px;
  height: 162px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-bottom: 5px;
  }
`;

export const Logo = styled.img`
  width: 162px;
  height: 60px;
  margin: 10px 0;

  @media (max-width: 768px) {
    width: 120px;
    height: 45px;
    margin: 5px 0;
  }
`;

export const Slogan = styled.p`
  font-size: 1.2rem;
  color: #161616;
  margin: 20px 0;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 15px 0;
    width: 85%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 344px;
  height: 49px;
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  color: #fff;
  background-color: #161616;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease; /* Smooth transition for background color */

  &:hover {
    background-color: #333; /* Slightly lighter black */
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 40px;
    font-size: 0.9rem;
  }
`;

export const TransparentButton = styled(Button)`
  color: #161616;
  background-color: transparent;
  border: none; /* Remove border */
  transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition for color and background */

  &:hover {
    color: #fff;
    background-color: #161616;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 40px;
    font-size: 0.9rem;
  }
`;

export const GoogleSignInButton = styled(Button)`
  color: #161616;
  background-color: transparent;
  border: none; /* Remove border */
  transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition for color and background */

  &:hover {
    color: #fff;
    background-color: #161616;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 40px;
    font-size: 0.9rem;
  }
`;

export const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
