import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => (
  <Nav>
    <LogoLink to="/home" activeClassName="activeLink">
      Kanban
    </LogoLink>
    <NavLinkStyled to="/login">Login</NavLinkStyled>
  </Nav>
);

export default Navigation;

const Nav = styled.nav`
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const LogoLink = styled(NavLink)`
  font-size: 30px;
`;
const NavLinkStyled = styled(NavLink)`
  font-size: 16px;
  margin-left: auto;
  &.activeLink {
    font-weight: bold;
  }
`;
