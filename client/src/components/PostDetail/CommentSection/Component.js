import React from 'react';
import CommentList from '../../CommentList';
import Empty from '../../shared/Empty';

const CommentSection = ({ token, post }) => (
  <>
    {!post.comments || post.comments.length === 0 ? (
      <Empty comments />
    ) : (
      <CommentList comments={post.comments} />
    )}
  </>
);

export default CommentSection;
