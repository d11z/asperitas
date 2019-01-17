import React from 'react';
import CommentFormContainer from '../../CommentForm/Container';
import CommentList from '../../CommentList';
import Empty from '../../shared/Empty';

const CommentSection = ({ token, post }) => (
  <>
    {token && <CommentFormContainer id={post.id} />}
    {post.comments.length === 0 ? (
      <Empty comments />
    ) : (
      <CommentList comments={post.comments} />
    )}
  </>
);

export default CommentSection;
