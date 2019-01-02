import React from 'react';
import styled from 'styled-components/macro';
import CommentDetailAuthor from './Author';
import CommentDetailTimestamp from './Timestamp';

const Wrapper = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const CommentDetail = props => (
  <Wrapper>
    <CommentDetailAuthor author={props.author.username} />
    <CommentDetailTimestamp created={props.created} />
  </Wrapper>
);

export default CommentDetail;
