import React from 'react';
import { Redirect } from 'react-router-dom';
import PostDetailPost from './Post';
import PostDetailCommentSection from './CommentSection';

const PostDetail = ({ post }) => {
  if (!post) return <Redirect to='/' />;
  return (
    <>
      <PostDetailPost {...post} />
      <PostDetailCommentSection comments={post.comments}/>
    </>
  );
};

export default PostDetail;
