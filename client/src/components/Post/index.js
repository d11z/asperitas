import React from 'react';
import styled from 'styled-components/macro';
import PostContent from './Content';
import PostVote from './Vote';

const Wrapper = styled.div`
  display: flex;
  height: 76px;
`;

const Post = props => {
  const { score, ...other } = props;
  return (
    <Wrapper>
      <PostVote score={score} />
      <PostContent {...other} />
    </Wrapper>
  );
};

export default Post;
