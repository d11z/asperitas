import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

import './ListView.css';

const filterPosts = (posts, category) => {
  if (!category) return posts;
  return posts.filter(post => post.category === category);
};

const sortPosts = posts => posts.sort((a, b) => b.score - a.score);

const mapPosts = posts => posts.map((post, index) => (
  <li key={index} className='post-list__item'>
    <Post
      score={post.score}
      title={post.title}
      url={post.url}
      author={post.author}
      timestamp={post.timestamp}
      comments={post.comments}
    />
  </li>
));

const ListView = props => (
  <ul className='post-list'>
    {props.posts ? mapPosts(
      sortPosts(filterPosts(props.posts, props.match.params.category))
    ) : null}
  </ul>
);

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(ListView);
