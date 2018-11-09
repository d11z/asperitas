import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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

const filterPosts = (posts, category) => {
  if (!category) return posts;
  return posts.filter(post => post.category === category);
};

const sortPosts = posts => posts.sort((a, b) => b.score - a.score);

const mapPosts = posts => posts.map((post, index) => (
  <Item key={index}>
    <Post {...post}/>
  </Item>
));

export const ListView = props => (
  <List>
    {props.posts ? mapPosts(
      sortPosts(filterPosts(props.posts, props.category))
    ) : null}
  </List>
);

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(ListView);
