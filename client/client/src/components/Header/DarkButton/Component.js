import React from 'react';
import styled from 'styled-components/macro';
import { headerItem } from '../../shared/helpers';
import HeaderDarkButtonIcon from './Icon';

const DarkButton = styled.span`
  ${headerItem};

  padding: 0 8px;
  cursor: pointer;

  @media (hover: hover) {
    :hover path {
      fill: ${props => props.theme.accent};
    }
  }
`;

const HeaderDarkButton = props => (
  <DarkButton onClick={props.toggleDarkTheme}>
    <HeaderDarkButtonIcon />
  </DarkButton>
);

export default HeaderDarkButton;
