import React from 'react';
import styled from 'styled-components/macro';

const Content = styled.p`
  padding: 8px;
  font-size: 16px;
`;

const CommentContent = props => <Content>{props.body}</Content>;

export default CommentContent;
