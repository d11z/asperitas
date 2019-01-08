import styled from 'styled-components/macro';
import { headerItem, smallFont } from '../shared/helpers';

const HeaderUsername = styled.span`
  ${headerItem};
  ${smallFont({ wide: true })};
  
  border-left: 1px solid ${props => props.theme.border};
  border-right: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.mutedText};
`;

export default HeaderUsername;
