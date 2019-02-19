import React from 'react';
import styled from 'styled-components/macro';
import PostContentTitle from './Title';
import PostContentUrl from './Url';
import PostContentDetail from './Detail';
import PostContentText from './Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${props => props.theme.border};
  padding: 8px;
  min-width: 0;
`;

const renderContent = (content, showFullContent) =>
  showFullContent ? content : content.substr(0, 80);

const PostContent = ({
  url,
  title,
  type,
  content,
  commentCount,
  showFullPost,
  ...details
}) => (
  <Wrapper>
    <PostContentTitle url={url} title={title} type={type} {...details} />
    {type === 'link' && <PostContentUrl url={url} />}
    {type === 'content' && (
      <PostContentText full={showFullPost}>
        {renderContent(content, showFullPost)}
      </PostContentText>
    )}
    <PostContentDetail commentCount={commentCount} {...details} />
  </Wrapper>
);

export default PostContent;
