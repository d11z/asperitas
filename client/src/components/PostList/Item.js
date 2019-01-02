import React from 'react';
import styled from 'styled-components/macro';
import Post from '../Post';

const Item = styled.li`
  :not(:first-child) {
    border-top: 1px solid ${props => props.theme.border};
  }
`;

const PostListItem = props => (
  <Item>
    <Post {...props} />
  </Item>
);

export default PostListItem;
