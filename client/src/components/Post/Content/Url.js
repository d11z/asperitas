import React from 'react';
import styled from 'styled-components/macro';

const Url = styled.span`
  color: ${props => props.theme.mutedText};
`;

const PostContentUrl = props => <Url>{props.url}</Url>;

export default PostContentUrl;
