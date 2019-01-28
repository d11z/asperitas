import React from 'react';
import styled from 'styled-components/macro';
import { headerItem } from '../../shared/helpers';
import HeaderUsernameText from './Text';

const Wrapper = styled.div`
  ${headerItem};
  
  flex-shrink: 1;
  border-left: 1px solid ${props => props.theme.border};
  border-right: 1px solid ${props => props.theme.border};
  min-width: 0;
`;

const HeaderUsername = props => (
  <Wrapper>
    <HeaderUsernameText>{props.children}</HeaderUsernameText>
  </Wrapper>
);

export default HeaderUsername;
