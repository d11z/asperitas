import React from 'react';
import styled from 'styled-components/macro';
import { css } from 'styled-components';

const tableHeader = css`
  text-align: center;
  font-weight: 600;
`;

const tableCell = isHeader => css`
  ${isHeader && tableHeader};
  border: 1px solid ${props => props.theme.border};
  padding: 0 0.75em;
`;

const TableCell = styled.td`
  ${props => tableCell(props.as === 'th')};
  line-height: 2;
`;

const tableCellRenderer = props => {
  if (props.isHeader) return <TableCell as='th'>{props.children}</TableCell>;
  return <TableCell>{props.children}</TableCell>;
};

export default tableCellRenderer;
