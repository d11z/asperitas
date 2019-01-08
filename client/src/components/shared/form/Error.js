import styled from 'styled-components/macro';
import { fade } from '../helpers';

const Error = styled.span`
  ${fade};
  
  position: absolute;
  right: 0;
  top: 0;
  color: ${props => props.theme.error};
`;

export default Error;
