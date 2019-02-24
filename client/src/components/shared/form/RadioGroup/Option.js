import React from 'react';
import styled from 'styled-components';
import { transition, wideFont } from '../../helpers';

const Label = styled.label`
  ${transition('color', 'background-color')};
  ${wideFont};

  display: block;
  flex: 1 1 100%;
  border: 1px solid ${props => props.theme.accent};
  width: 100%;
  padding: 8px;
  background: ${props => (props.active ? props.theme.accent : 'transparent')};
  cursor: pointer;
  text-align: center;
  color: ${props => (props.active ? '#ffffff' : props.theme.accent)};
  outline: 0;

  @media (hover: hover) {
    :hover {
      background: ${props => props.theme.accent};
      color: #ffffff;
    }
  }

  :first-of-type {
    border-radius: 3px 0 0 3px;
  }

  :last-of-type {
    border-radius: 0 3px 3px 0;
  }

  :not(:first-of-type) {
    border-left: 0;
  }
`;

const RadioGroupOption = props => (
  <>
    <input
      type='radio'
      name='radiogroup'
      id={props.value}
      onChange={props.onClick}
    />
    <Label htmlFor={props.value} active={props.active}>
      {props.label}
    </Label>
  </>
);

export default RadioGroupOption;
