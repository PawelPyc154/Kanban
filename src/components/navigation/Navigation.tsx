import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => (
  <Nav>
    <LogoLink to="/home" activeClassName="activeLink">
      Kanban
    </LogoLink>
    <NavLinkStyled to="/login">LogIn</NavLinkStyled>
    <NavLinkStyled to="/signin">SignIn</NavLinkStyled>
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
  margin-right: auto;
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 16px;
  margin-left: 10px;
  &.activeLink {
    font-weight: bold;
  }
`;
