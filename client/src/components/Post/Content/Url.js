import React from 'react';
import styled from 'styled-components/macro';

const Url = styled.span`
  overflow: hidden;
  font-size: 13px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.theme.mutedText};
`;

const PostContentUrl = props => <Url>{props.url}</Url>;

export default PostContentUrl;
