import React from 'react';
import styled from 'styled-components/macro';

const Author = styled.span`
  margin-right: 4px;
  color: ${props => props.theme.normalText};
`;

const CommentDetailAuthor = props => <Author>{props.author}</Author>;

export default CommentDetailAuthor;
