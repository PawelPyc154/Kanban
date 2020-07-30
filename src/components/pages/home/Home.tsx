import React from 'react';
import styled from 'styled-components';
import media from '../../../utils/MediaQueries';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <Main>
    <H1>Kanban board</H1>
  </Main>
);

export default Home;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  ${media.tablet} {
    height: calc(100vh - 100px);
  }
`;
const H1 = styled.h1`
  font-size: 40px;
  ${media.phone} {
    font-size: 60px;
  }
  ${media.tablet} {
    font-size: 70px;
  }
  ${media.desktop} {
    font-size: 80px;
  }
`;
