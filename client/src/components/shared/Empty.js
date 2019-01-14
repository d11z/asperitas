import React from 'react';
import styled from 'styled-components/macro';
import { smallFont } from '../shared/helpers';

const Wrapper = styled.div`
  ${smallFont};

  margin: 0 auto;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  padding: 48px 0;
  background-color: #ffffff;
  text-align: center;
  color: ${props => props.theme.mutedText};

  @media (max-width: 768px) {
    border-top: none;
    border-radius: 0;
  }
`;

const Empty = () => <Wrapper>there's nothing here...</Wrapper>;

export default Empty;
