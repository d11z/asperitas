import React from 'react';
import styled from 'styled-components/macro';
import CommentDetailContainer from './Detail/Container';
import CommentContent from './Content';

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  background-color: ${props => props.theme.foreground};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

const Comment = ({ body, ...details }) => (
  <Wrapper>
    <CommentDetailContainer {...details} />
    <CommentContent>{body}</CommentContent>
  </Wrapper>
);

export default Comment;
