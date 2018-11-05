import React from 'react';
import './PostList.css';
import Post from './Post';

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

const PostList = props => (
  <ul className='post-list'>
    {props.posts ? mapPosts(props.posts) : null}
  </ul>
);

export default PostList;
