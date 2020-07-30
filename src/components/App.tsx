import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useDispatch } from 'react-redux';
import Pages from './pages/Pages';
import Navigation from './navigation/Navigation';
import { loadUser } from '../state/auth/action';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Pages />
      <GlobalStyle />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
body {
  font-family: Roboto, Arial, sans-serif;
  background-color: #2ecc71;
  font-size: 16px;
}
`;
