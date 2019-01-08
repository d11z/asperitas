import React from 'react';
import styled from 'styled-components/macro';

const Content = styled.p`
  padding: 12px;
  font-size: 14px;
  color: ${props => props.theme.normalText};
`;

const CommentContent = props => <Content>{props.body}</Content>;

export default CommentContent;
