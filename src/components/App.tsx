import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Pages from './pages/Pages';

function App() {
  return (
    <>
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
  background-color: #181818;
}
`;
