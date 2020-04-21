import React from 'react';
import styled from 'styled-components/macro';

const ThematicBreak = styled.hr`
  margin: 1em 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const thematicBreakRenderer = () => <ThematicBreak />;

export default thematicBreakRenderer;
