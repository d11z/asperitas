import React from 'react';
import styled from 'styled-components/macro';
import CommentList from '../CommentList';
import CommentFormContainer from '../CommentForm/Container';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
`;

const PostDetailCommentSection = props => (
  <Wrapper>
    <CommentList comments={props.comments} />
    <CommentFormContainer />
  </Wrapper>
);

export default PostDetailCommentSection;
