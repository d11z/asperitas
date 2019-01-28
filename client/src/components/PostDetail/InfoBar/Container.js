import { connect } from 'react-redux';
import { attemptDeletePost } from '../../../actions/posts';
import PostDetailInfoBar from './Component';

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  id: state.posts.post.id,
  views: state.posts.post.views,
  upvotePercentage: state.posts.post.upvotePercentage,
  author: state.posts.post.author
});

const mapDispatchToProps = { attemptDeletePost };

const PostDetailInfoBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailInfoBar);

export default PostDetailInfoBarContainer;
