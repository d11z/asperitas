import styled from 'styled-components/macro';
import { transition, wideFont } from './helpers';

const Button = styled.button`
  ${transition('filter', 'box-shadow')};
  ${wideFont};
  
  border: none;
  border-radius: 3px;
  padding: 8px 24px;
  background-color: ${props => props.theme.accent};
  cursor: pointer;
  color: #ffffff;
  outline: none;
  
  :hover {
    filter: brightness(110%);
  }
  
  :active {
    filter: brightness(90%);
  }
  
  :focus {
    box-shadow: 0 0 0 2px ${props => props.theme.accent + '4d'};
  }
`;

export default Button;
