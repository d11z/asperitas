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

const PostContent = props => {
  const { url, title, comments, ...other } = props;
  return (
    <Wrapper>
      <ContentTitle url={url} title={title} />
      <ContentUrl url={url} />
      <ContentDetail comments={comments ? comments.length : 0} {...other} />
    </Wrapper>
  );
};

export default PostContent;
