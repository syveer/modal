import React, { useEffect } from 'react';
import {
  WelcomeContainer,
  Icon,
  Logo,
  Slogan,
  ButtonsContainer,
  Button,
  TransparentButton,
  GoogleSignInButton,
  GoogleIcon,
} from './WelcomePage.styled';
import laptopIcon from '../../images/laptopboy.png';
import logo from '../../images/logo1.png';
import googlelogo from '../../images/googlelogo.svg';
const WelcomePage = ({ onStart, onRegisterClick, onLoginClick }) => {
  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        try {
          window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
              client_id:
                '525256857785-5ggs9e3nljgo80lcg41roujgflh53avd.apps.googleusercontent.com',
            });
          });
        } catch (error) {
          console.error('Google API initialization error:', error);
        }
      };
      script.onerror = error => {
        console.error('Error loading Google API script:', error);
      };
      document.body.appendChild(script);
    };

    loadGoogleAPI();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();
      console.log(googleUser.getBasicProfile().getName());
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  return (
    <WelcomeContainer>
      <Icon src={laptopIcon} alt="Guy at a laptop" />
      <Logo src={logo} alt="Logo" />
      <Slogan>
        Supercharge your productivity and take control of your tasks with
        TaskPro
        <br />
        Don't wait, start achieving your goals now!
      </Slogan>
      <ButtonsContainer>
        <Button onClick={onRegisterClick}>Register</Button>
        <TransparentButton onClick={onLoginClick}>Login</TransparentButton>
        <GoogleSignInButton onClick={handleGoogleSignIn}>
          <GoogleIcon src={googlelogo} alt="Google icon" />
          Sign in with Google
        </GoogleSignInButton>
      </ButtonsContainer>
    </WelcomeContainer>
  );
};

export default WelcomePage;
