import React from 'react';
import styled from 'styled-components/macro';
import CommentDetailAuthor from './Author';
import CommentDetailTimestamp from './Timestamp';

const Wrapper = styled.div`
  font-size: 13px;
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const CommentDetail = props => (
  <Wrapper>
    <CommentDetailAuthor>{props.author.username}</CommentDetailAuthor>
    <CommentDetailTimestamp created={props.created} />
  </Wrapper>
);

export default CommentDetail;
