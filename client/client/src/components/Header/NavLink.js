import styled from 'styled-components/macro';
import NavLink from '../shared/NavLink';
import { headerItem, wideFont, link, transition } from '../shared/helpers';

const HeaderNavLink = styled(NavLink)`
  ${headerItem};
  ${wideFont};
  ${link};
  
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.mutedText};
  
  ::after {
    ${transition('opacity', 'border-bottom-width')};
    
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-bottom: 1px solid ${props => props.theme.accent};
  }
  
  :hover::after {
    opacity: 1;
  }
  
  &.active::after {
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 3px solid ${props => props.theme.accent};
  }
`;

export default HeaderNavLink;
