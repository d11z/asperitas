import React from 'react';
import styled from 'styled-components/macro';
import PostVoteUpvote from './Upvote';
import PostVoteDownvote from './Downvote';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  padding: 4px;
  background-color: ${props => props.theme.voteBackground};
  font-size: 13px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.normalText};
`;

class PostVote extends React.Component {
  static existingVote({ user, votes }) {
    const existingVote =
      user && votes && votes.find(vote => vote.user === user.id);
    return existingVote && existingVote.vote;
  }

  componentWillMount() {
    this.didVote = PostVote.existingVote(this.props);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    this.didVote = PostVote.existingVote(nextProps);
  }

  castVote(vote) {
    const { attemptVote, id, token } = this.props;
    token && attemptVote(id, vote, token);
  }

  render() {
    const canVote = !!this.props.user;
    const didUpvote = this.didVote === 1;
    const didDownvote = this.didVote === -1;
    const upvote = () => this.castVote(didUpvote ? 0 : 1);
    const downvote = () => this.castVote(didDownvote ? 0 : -1);

    return (
      <Wrapper>
        <PostVoteUpvote
          canVote={canVote}
          didVote={didUpvote}
          onClick={upvote}
        />
        <span>{this.props.score}</span>
        <PostVoteDownvote
          canVote={canVote}
          didVote={didDownvote}
          onClick={downvote}
        />
      </Wrapper>
    );
  }
}

export default PostVote;
