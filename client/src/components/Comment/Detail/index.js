import React from 'react';
import styled from 'styled-components/macro';
import { smallFont } from '../../shared/helpers';
import CommentDetailAuthor from './Author';
import CommentDetailTimestamp from './Timestamp';

const Wrapper = styled.div`
  ${smallFont};

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
