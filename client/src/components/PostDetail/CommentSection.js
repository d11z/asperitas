import React from 'react';
import styled from 'styled-components/macro';
import CommentList from '../CommentList';
import CommentFormContainer from '../CommentForm/Container';

const Wrapper = styled.div`
  margin-top: 16px;
`;

const PostDetailCommentSection = props => (
  <Wrapper>
    <CommentFormContainer />
    <CommentList comments={props.comments} />
  </Wrapper>
);

export default PostDetailCommentSection;
