import styled from 'styled-components/macro';
import { transition } from '../../shared/helpers';

const PostVoteButton = styled.button`
  ${transition('background-color')};
  
  border: 0;
  border-radius: 3px;
  height: 22px;
  width: 22px;
  background-color: transparent;
  cursor: pointer;

  :focus {
    outline: 0;
  }
  
  :hover {
    background-color: ${props => props.theme.voteButtonHover};
  }

  ::after {
    ${transition('border')};
    
    content: '';
    position: relative;
    left: 6px;
    display: block;
    transform: rotate(-45deg);
    width: 8px;
    height: 8px;
  }
  
  ${({ canVote }) => !canVote && `
    cursor: default;
    pointer-events: none;
  `}
`;

export default PostVoteButton;
