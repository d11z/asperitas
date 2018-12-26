import React from 'react';
import PostDetailPost from './Post';
import PostDetailCommentSection from './CommentSection';

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.id);
  }

  render() {
    const { isFetching, post } = this.props;
    if (isFetching || !post) return null;
    return (
      <>
        <PostDetailPost {...post} />
        <PostDetailCommentSection comments={post.comments}/>
      </>
    );
  }
}

export default PostDetail;
