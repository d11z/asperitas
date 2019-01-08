import React from 'react';
import styled from 'styled-components/macro';
import { link } from '../../shared/helpers';

const Title = styled.a`
  ${link({ underline: true })};
  
  display: block;
  width: fit-content;
  font-size: 16px;
  text-decoration: none;
  color: ${props => props.theme.normalText};
`;

const PostContentTitle = props => <Title href={props.url}>{props.title}</Title>;

export default PostContentTitle;
