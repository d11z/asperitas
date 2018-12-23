import React from 'react';
import styled from 'styled-components/macro';
import ContentTitle from './Title';
import ContentUrl from './Url';
import ContentDetail from './Detail';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  font-size: 13px;
`;

const PostContent = ({ url, title, comments, ...details }) => (
  <Wrapper>
    <ContentTitle url={url} title={title}/>
    <ContentUrl url={url}/>
    <ContentDetail comments={comments ? comments.length : 0} {...details} />
  </Wrapper>
);

export default PostContent;
