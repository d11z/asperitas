import { connect } from 'react-redux';
import { attemptDeleteComment } from '../../../actions/posts';
import CommentDetail from './Component';

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  post: state.posts.post.id
});

const mapDispatchToProps = { attemptDeleteComment };

const CommentDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDetail);

export default CommentDetailContainer;
