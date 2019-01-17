import React from 'react';
import styled from 'styled-components/macro';
import Post from '../Post';

const Wrapper = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    border-top: none;
  }
`;

const PostDetailPost = props => (
  <Wrapper>
    <Post {...props} />
  </Wrapper>
);

export default PostDetailPost;
