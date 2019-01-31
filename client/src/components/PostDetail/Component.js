import React from 'react';
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
import Empty from '../shared/Empty';
import PostDetailPost from './Post';
import PostDetailInfoBarContainer from './InfoBar/Container';
import CommentFormContainer from '../CommentForm/Container';
import PostDetailCommentSection from './CommentSection';

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
    const { post } = this.props;
    if (this.props.isFetching) return <LoadingIndicatorBox />;
    if (!post) return <Empty />;
    return (
      <>
        <PostDetailPost {...post} />
        <PostDetailInfoBarContainer
          id={post.id}
          views={post.views}
          upvotePercentage={post.upvotePercentage}
          author={post.author}
        />
        {this.props.token && <CommentFormContainer id={post.id} />}
        <PostDetailCommentSection comments={post.comments} />
      </>
    );
  }
}

export default PostDetail;
