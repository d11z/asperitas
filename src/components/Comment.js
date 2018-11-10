import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

const Wrapper = styled.div`
  font-size: 12px;
  border: 1px solid #eee;
`;

const DetailWrapper = styled.div`
  padding: 8px;
  border-bottom: 1px solid #eee;
`;

const Author = styled.a`
  margin-right: 4px;
`;

const Timestamp = styled.span`
  color: #6f6f6f;
`;

const Content = styled.p`
  padding: 8px;
  font-size: 16px;
`;

const Comment = props => (
  <Wrapper>
    <DetailWrapper>
      <Author href='/'>{props.author}</Author>
      <Timestamp>{moment(props.timestamp).fromNow()}</Timestamp>
    </DetailWrapper>
    <Content>{props.text}</Content>
  </Wrapper>
);

export default Comment;
