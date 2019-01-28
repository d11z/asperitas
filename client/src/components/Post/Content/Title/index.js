import React from 'react';
import styled from 'styled-components/macro';
import { link } from '../../../shared/helpers';
import PostContentTitleWrapper from './Wrapper';

const Title = styled.a`
  ${link({ underline: true })};

  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  line-height: 20px;
  text-decoration: none;
  color: ${props => props.theme.normalText};
`;

const PostContentTitle = props => (
  <PostContentTitleWrapper>
    <Title href={props.url}>{props.title}</Title>
  </PostContentTitleWrapper>
);

export default PostContentTitle;
