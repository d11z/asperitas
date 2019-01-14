import React from 'react';
import styled from 'styled-components/macro';

const Url = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.theme.mutedText};
`;

const PostContentUrl = props => <Url>{props.url}</Url>;

export default PostContentUrl;
