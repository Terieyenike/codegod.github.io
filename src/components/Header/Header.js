import React from 'react';
import styled from 'styled-components';
import logo from '../../GitHub-Mark-Light-64px.png';

const HeaderWrapper = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 64px;
  pointer-events: none;
  order: 2;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo src={logo} alt='logo' />
    <h1>My Github Portfolio</h1>
  </HeaderWrapper>
);

export default Header;
