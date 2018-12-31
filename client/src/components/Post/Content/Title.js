import React from 'react';
import styled from 'styled-components/macro';

const Title = styled.a`
  display: block;
  margin-bottom: 2px;
  font-size: 16px;
  text-decoration: none;
  color: ${props => props.theme.normalText};
`;

const PostContentTitle = props => <Title href={props.url}>{props.title}</Title>;

export default PostContentTitle;
