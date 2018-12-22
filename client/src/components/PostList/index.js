import React from 'react';
import styled from 'styled-components/macro';
import PostListItem from './Item';

const List = styled.ul`
  list-style: none;
  border: 1px solid #eee;
`;

const mapPosts = posts =>
  posts.map((post, index) => (
    <PostListItem key={index} {...post} />
  ));

const PostList = props => <List>{mapPosts(props.posts)}</List>;

export default PostList;
