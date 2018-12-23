import React from 'react';
import styled from 'styled-components/macro';
import CommentDetail from './Detail';
import CommentContent from './Content';

const Wrapper = styled.div`
  font-size: 13px;
  border: 1px solid #eee;
`;

const Comment = ({ body, ...details }) => (
  <Wrapper>
    <CommentDetail {...details} />
    <CommentContent body={body} />
  </Wrapper>
);

export default Comment;
