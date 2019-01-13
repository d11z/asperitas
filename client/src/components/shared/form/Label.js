import styled from 'styled-components/macro';
import { smallFont } from './../helpers';

const Label = styled.label`
  ${smallFont};
  
  position: relative;
  margin-bottom: 24px;
  width: 100%;
  color: ${props => props.theme.mutedText};
`;

export default Label;
