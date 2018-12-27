import React from 'react';
import PostDetailPost from './Post';
import CommentSectionContainer from './CommentSection/Container';

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
        <CommentSectionContainer />
      </>
    );
  }
}

export default PostDetail;
