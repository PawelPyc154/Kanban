import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Pages from './pages/Pages';
import Navigation from './navigation/Navigation';

function App() {
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
