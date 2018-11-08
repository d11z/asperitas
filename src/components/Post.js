import React from 'react';
import moment from 'moment';
import './Post.css';

const Post = props => (
  <div className='post'>
    <div className='vote'>
      <button className='vote__button vote__button--up'/>
      <div className='vote__score'>{props.score}</div>
      <button className='vote__button vote__button--down'/>
    </div>
    <div className='post__content'>
      <div className='post__link'>
        <a className='post__title' href={props.url}>{props.title}</a>
        <div className='post__url'>{props.url}</div>
      </div>
      <div className='post__detail'>
        <span>by</span>
        <a className='post__author' href='/'>{props.author}</a>
        <span className='post__timestamp'>{moment(props.timestamp).fromNow()}</span>
        <a className='post__comments' href='/'>{props.comments} comments</a>
      </div>
    </div>
  </div>
);

export default Post;
