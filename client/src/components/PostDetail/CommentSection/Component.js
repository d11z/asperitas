import React from 'react';
import styled from 'styled-components/macro';
import CommentFormContainer from '../../CommentForm/Container';
import CommentList from '../../CommentList';

const Wrapper = styled.div`
  margin-top: 16px;
`;

const CommentSection = ({ token, post }) => (
  <Wrapper>
    {token && <CommentFormContainer id={post.id} />}
    <CommentList comments={post.comments} />
  </Wrapper>
);

export default CommentSection;
