import styled from 'styled-components/macro';
import PostVoteButton from './Button';

const PostVoteDownvote = styled(PostVoteButton)`
  --iconColor: ${props => (props.didVote ? '#2e70ff' : 'var(--color)')};

  ::after {
    border-bottom: 2px solid var(--iconColor);
    border-left: 2px solid var(--iconColor);
    top: -2px;
  }
`;

export default PostVoteDownvote;
