import React from 'react';
import styled from 'styled-components/macro';
import { link } from './helpers';

const Button = styled.button`
  ${link};
  
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  color: ${props => props.theme.normalText};
  margin-left: auto;
`;

const DeleteButton = props => (
  <Button onClick={props.onClick}>delete</Button>
);

export default DeleteButton;
