import React from 'react';
import styled from 'styled-components/macro';

const SBlock = styled.div`
  max-width: 80vw;
  min-height: 100px;
  margin: 2rem auto 1rem auto;
  padding: 16px;
  font-size: 10px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  padding: 0 0 1rem 0;
  color: ${props => props.theme.normalText};
  border-bottom: 1px solid ${props => props.theme.normalText};
`;

const SettingsBlock = props => (
  <SBlock>
    <Title>{props.title}</Title>
    {props.children}
  </SBlock>
);

export default SettingsBlock;
