import styled from 'styled-components';
import React from 'react';
import media from '../../../utils/MediaQueries';
import GoogleButton from '../../universal/GoogleButton';

export interface LogInProps {}

const Signin: React.FC<LogInProps> = () => (
  <Main>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="text" />
    <Label htmlFor="login">Login</Label>
    <Input id="login" type="text" />
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" />
    <Button type="button">Login</Button>
    <GoogleButton />
  </Main>
);

export default Signin;

const Main = styled.main`
  width: auto;
  max-width: 400px;
  margin: auto;
  padding: 200px 3px;
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) {
    padding-top: 50px;
  }
  ${media.tablet} {
    padding: 200px 3px;
  }
`;
const Input = styled.input`
  height: 40px;
  margin: 5px 0 20px 0;
  font-size: 25px;
  border: none;
  padding: 5px;
`;
const Label = styled.label`
  font-size: 20px;
`;
const Button = styled.button`
  height: 40px;
  margin: 10px 0 20px 0;
  font-size: 30px;
  background-color: gray;
  border: none;
  cursor: pointer;
`;
