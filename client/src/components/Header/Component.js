import React from 'react';
import styled from 'styled-components/macro';
import HeaderLogo from './Logo';
import HeaderDarkButtonContainer from './DarkButton/Container';
import HeaderNavLink from './NavLink';
import DropdownButton from '../DropdownButton/Component';

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-bottom: 1px solid ${props => props.theme.border};
  height: 48px;
  padding: 0 10vw;
  background-color: ${props => props.theme.foreground};
  user-select: none;

  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = ({ user, logout, history }) => {
  async function logoutFn() {
    await logout();
    history.push('/');
  }

  return (
    <Wrapper>
      <HeaderLogo />
      <HeaderDarkButtonContainer />
      {user ? (
        <>
          <DropdownButton
            options={{
              profile: `/u/${user.username}`,
              settings: '/settings'
            }}
            username={user.username}
          />
          <HeaderNavLink as='span' onClick={logoutFn}>
            log out
          </HeaderNavLink>
        </>
      ) : (
        <>
          <HeaderNavLink to='/login'>log in</HeaderNavLink>
          <HeaderNavLink to='/signup'>sign up</HeaderNavLink>
        </>
      )}
    </Wrapper>
  );
};

export default Header;
