import styled from 'styled-components/macro';
import PostVoteButton from './Button';

const PostVoteUpvote = styled(PostVoteButton)`
  --iconColor: ${props =>
    props.didVote ? props.theme.upvote : props.theme.vote};

  ::after {
    border-top: 2px solid var(--iconColor);
    border-right: 2px solid var(--iconColor);
    top: 3px;
  }
`;

export default PostVoteUpvote;
