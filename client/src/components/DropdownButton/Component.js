import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { headerItem, wideFont, link, transition } from '../shared/helpers';

const DDButton = styled.button`
  ${headerItem};
  ${wideFont};
  ${link};

  position: relative;
  cursor: pointer;
  color: ${props => props.theme.mutedText};
  background: none;
  border: none;
  outline: 0;

  ::-moz-focus-inner {
    border: 0;
  }

  ::after {
    ${transition('opacity', 'border-bottom-width')};

    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-bottom: 1px solid ${props => props.theme.accent};
  }

  :hover::after {
    opacity: 1;
  }

  &.active::after {
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 3px solid ${props => props.theme.accent};
  }
`;

const DropdownButton = ({ username }) => {
  const [clicked, setClicked] = useState(false);

  function click() {}

  return <DDButton>{username}</DDButton>;
};

export default DropdownButton;
