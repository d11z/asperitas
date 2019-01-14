import React from 'react';
import Empty from '../shared/Empty';
import PostDetailPost from './Post';
import CommentSectionContainer from './CommentSection/Container';

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.id);
  }

  render() {
    const { post } = this.props;
    if (!post) return <Empty />;
    return (
      <>
        <PostDetailPost {...post} />
        <CommentSectionContainer />
      </>
    );
  }
}

export default PostDetail;
