import React from 'react';
import styled from 'styled-components/macro';
import PostContentTitle from './Title';
import PostContentUrl from './Url';
import PostContentDetail from './Detail';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${props => props.theme.border};
  padding: 8px;
  min-width: 0;
`;

const PostContent = ({ url, title, commentCount, ...details }) => (
  <Wrapper>
    <PostContentTitle url={url} title={title} />
    <PostContentUrl url={url} />
    <PostContentDetail commentCount={commentCount} {...details} />
  </Wrapper>
);

export default PostContent;
