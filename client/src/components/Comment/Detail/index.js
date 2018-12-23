import React from 'react';
import styled from 'styled-components/macro';
import DetailAuthor from './Author';
import DetailTimestamp from './Timestamp';

const Wrapper = styled.div`
  padding: 8px;
  border-bottom: 1px solid #eee;
`;

const CommentDetail = props => (
  <Wrapper>
    <DetailAuthor author={props.author.username} />
    <DetailTimestamp timestamp={props.timestamp} />
  </Wrapper>
);

export default CommentDetail;
