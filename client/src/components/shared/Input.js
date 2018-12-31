import styled from 'styled-components/macro';
import { Field } from 'redux-form';

const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  border: none;
  border-radius: 0;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: ${props => props.theme.normalText};
`;

export default Input;
