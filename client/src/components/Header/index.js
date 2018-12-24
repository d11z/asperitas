import React from 'react';
import styled from 'styled-components/macro';
import HeaderLogo from './Logo';
import HeaderNavLink from './NavLink';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  margin-bottom: 24px;
  background-color: #282c34;
`;

const Header = ({ token, logout }) => (
  <Wrapper>
    <HeaderLogo />
    {token ? (
      <HeaderNavLink as='span' onClick={logout}>
        log out
      </HeaderNavLink>
    ) : (
      <div>
        <HeaderNavLink to='/login'>log in</HeaderNavLink>
        <HeaderNavLink to='/signup'>sign up</HeaderNavLink>
      </div>
    )}
  </Wrapper>
);

export default Header;
