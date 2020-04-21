import React from 'react';
import styled from 'styled-components/macro';
import Post from '../Post';

const Wrapper = styled.div`
  overflow: hidden;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px 2px 0 0;

  @media (max-width: 768px) {
    margin-bottom: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

const PostDetailPost = props => (
  <Wrapper>
    <Post {...props} full />
  </Wrapper>
);

export default PostDetailPost;
