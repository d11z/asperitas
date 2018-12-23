import React from 'react';
import styled from 'styled-components/macro';
import PostContent from './Content';
import PostVote from './Vote';

const Wrapper = styled.div`
  display: flex;
  height: 76px;
`;

const Post = ({ score, ...content }) => (
  <Wrapper>
    <PostVote score={score}/>
    <PostContent {...content} />
  </Wrapper>
);

export default Post;
