import React from 'react';
import styled from 'styled-components/macro';
import Post from './Post';

const List = styled.ul`
  list-style: none;
  border: 1px solid #eee;
`;

const Item = styled.li`
  :not(:first-child) {
    border-top: 1px solid #eee;
  }
`;

const mapPosts = posts =>
  posts.map((post, index) => (
    <Item key={index}>
      <Post {...post} />
    </Item>
  ));

const PostList = props => <List>{props.posts && mapPosts(props.posts)}</List>;

export default PostList;
