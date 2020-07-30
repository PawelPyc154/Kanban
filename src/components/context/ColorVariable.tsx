import React from 'react';
import { ThemeProvider } from 'styled-components';

export interface StyleVariableProps {}

const colors = { primary: 'red' };
export type Theme = { colors: typeof colors };

const ColorVariable: React.FC<StyleVariableProps> = ({ children }) => (
  <ThemeProvider theme={{ colors }}>{children}</ThemeProvider>
);

export default ColorVariable;
