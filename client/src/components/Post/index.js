import React from 'react';
import styled from 'styled-components/macro';
import PostVoteContainer from './Vote/Container';
import PostContent from './Content';

const Wrapper = styled.div`
  display: flex;
  height: 76px;
`;

const Post = ({ id, votes, score, ...content }) => (
  <Wrapper>
    <PostVoteContainer id={id} votes={votes} score={score} />
    <PostContent id={id} {...content} />
  </Wrapper>
);

export default Post;
