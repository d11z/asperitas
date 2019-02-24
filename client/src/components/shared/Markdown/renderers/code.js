import React from 'react';
import styled from 'styled-components/macro';

const Pre = styled.pre`
  border-radius: 2px;
  padding: 12px 16px;
  background-color: ${props => props.theme.pageBackground};
  overflow-x: scroll;
`;

const codeRenderer = props => (
  <Pre>
    <code>{props.value}</code>
  </Pre>
);

export default codeRenderer;
