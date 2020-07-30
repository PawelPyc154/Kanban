import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setLoginRegisterGoogle } from '../../state/auth/action';

export interface FbAndGoogleProps {}

const GoogleButton: React.FC<FbAndGoogleProps> = () => {
  const dispatch = useDispatch();

  const handleResponse = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('accessToken' in res) {
      await dispatch(setLoginRegisterGoogle(res));
    }
  };

  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_APP_ID}`}
      buttonText="Login with Google"
      onSuccess={(res) => handleResponse(res)}
      onFailure={(res) => handleResponse(res)}
      cookiePolicy="single_host_origin"
      isSignedIn={false}
      autoLoad={false}
      render={(renderProps) => (
        <GoogleLoginStyled type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <p>Login with Google</p>
        </GoogleLoginStyled>
      )}
    />
  );
};

export default GoogleButton;

const GoogleLoginStyled = styled.button`
  width: 100%;
  height: 35px;
  background-color: #d9534f;
  border: none;
  margin: 15px 0 15px 0;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
`;
