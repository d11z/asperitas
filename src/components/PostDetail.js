import React from 'react';
import styled from 'styled-components/macro';
import Post from './Post';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const PostWrapper = styled.div`
  margin-bottom: 16px;
  border: 1px solid #eee;
`;

const CommentSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
`;

const CommentListWrapper = styled.div`
  flex: 3;
  margin-right: 16px;
`;

const CommentFormWrapper = styled.div`
  flex: 2;
`;

const PostDetail = props => (
  <>
    <PostWrapper>
      <Post {...props.post} />
    </PostWrapper>
    <CommentSection>
      <CommentListWrapper>
        {props.post && <CommentList comments={props.post.comments} />}
      </CommentListWrapper>
      <CommentFormWrapper>
        <CommentForm />
      </CommentFormWrapper>
    </CommentSection>
  </>
);

export default PostDetail;
