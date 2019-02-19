import React from 'react';
import styled from 'styled-components/macro';
import PostContentTitle from './Title';
import PostContentPreview from './Preview';
import PostContentFullText from './FullText';
import PostContentDetail from './Detail';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px solid ${props => props.theme.border};
  padding: 8px;
  min-width: 0;
`;

const renderContent = props => {
  switch (props.type) {
    case 'link':
      return <PostContentPreview>{props.url}</PostContentPreview>;

    case 'text':
      if (props.showFullPost) {
        return <PostContentFullText>{props.text}</PostContentFullText>;
      }
      return <PostContentPreview>{props.text}</PostContentPreview>;

    default:
      break;
  }
};

const PostContent = ({
  url,
  title,
  type,
  text,
  commentCount,
  showFullPost,
  ...details
}) => (
  <Wrapper>
    <PostContentTitle
      url={url}
      title={title}
      type={type}
      full={showFullPost}
      {...details}
    />
    {renderContent({ type, url, text, showFullPost })}
    <PostContentDetail commentCount={commentCount} {...details} />
  </Wrapper>
);

export default PostContent;
