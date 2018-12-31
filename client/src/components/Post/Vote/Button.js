import styled from 'styled-components/macro';

const PostVoteButton = styled.button`
  --color: #b6b6b6;
  
  height: 22px;
  width: 22px;
  border: 0;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  transition: all .15s ease;

  :focus { outline: 0; }
  :hover { background-color: #e3e5e8; }

  ::after {
    display: block;
    content: '';
    width: 8px;
    height: 8px;
    position: relative;
    left: 6px;
    transform: rotate(-45deg);
    transition: all .15s ease;
  }
  
  ${({ canVote }) => !canVote && `
    cursor: default;
    pointer-events: none;
  `}
`;

export default PostVoteButton;
