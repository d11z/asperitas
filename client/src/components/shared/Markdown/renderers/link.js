import React from 'react';
import styled from 'styled-components/macro';
import { transition } from '../../helpers';

const Link = styled.a`
  ${transition('color')};

  text-decoration: underline;
  color: ${props => props.theme.accent};

  :hover {
    filter: brightness(110%);
  }
`;

const linkRenderer = props => <Link {...props} />;

export default linkRenderer;
