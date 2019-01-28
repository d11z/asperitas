import React from 'react';
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
import Empty from '../shared/Empty';
import PostDetailPost from './Post';
import PostDetailInfoBarContainer from './InfoBar/Container';
import CommentSectionContainer from './CommentSection/Container';

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.post !== prevProps.post && this.props.post === null) {
      this.props.history.goBack();
    }
  }

  render() {
    const { isFetching, post } = this.props;
    if (isFetching) return <LoadingIndicatorBox />;
    if (!post) return <Empty />;
    return (
      <>
        <PostDetailPost {...post} />
        <PostDetailInfoBarContainer />
        <CommentSectionContainer />
      </>
    );
  }
}

export default PostDetail;
