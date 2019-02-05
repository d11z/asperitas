import React from 'react';
import styled from 'styled-components/macro';
import CommentDetailContainer from './Detail/Container';
import CommentContent from './Content';

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  background-color: ${props => props.theme.foreground};
`;

const Comment = ({ body, ...details }) => (
  <Wrapper>
    <CommentDetailContainer {...details} />
    <CommentContent>{body}</CommentContent>
  </Wrapper>
);

export default Comment;
