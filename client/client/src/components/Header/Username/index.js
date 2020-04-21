import React from 'react';
import styled from 'styled-components/macro';
import HeaderNavLink from '../NavLink';
import HeaderUsernameText from './Text';

const Wrapper = styled(HeaderNavLink)`
  flex-shrink: 1;
  border-left: 1px solid ${props => props.theme.border};
  border-right: 1px solid ${props => props.theme.border};
  min-width: 0;
`;

const HeaderUsername = props => (
  <Wrapper to={`/u/${props.username}`}>
    <HeaderUsernameText>{props.username}</HeaderUsernameText>
  </Wrapper>
);

export default HeaderUsername;
