import React from 'react';
import styled from 'styled-components/macro';
import PostVoteContainer from './Vote/Container';
import PostContent from './Content';

const Wrapper = styled.div`
  display: flex;
  height: 76px;
  background-color: #ffffff;
`;

const Post = ({ id, votes, score, comments, ...content }) => (
  <Wrapper>
    <PostVoteContainer id={id} votes={votes} score={score} />
    <PostContent
      id={id}
      commentCount={comments ? comments.length : 0}
      {...content}
    />
  </Wrapper>
);

export default Post;
