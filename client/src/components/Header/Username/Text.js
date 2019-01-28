import styled from 'styled-components/macro';
import { smallFont } from '../../shared/helpers';

const HeaderUsernameText = styled.span`
  ${smallFont({ wide: true })};
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.theme.mutedText};
`;

export default HeaderUsernameText;
