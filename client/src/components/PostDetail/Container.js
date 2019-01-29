import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts';
import PostDetail from './Component';

export const mapStateToProps = state => ({
  token: state.auth.token,
  isFetching: state.posts.isFetching,
  post: state.posts.post
});

const mapDispatchToProps = { fetchPost };

const PostDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);

export default PostDetailContainer;
