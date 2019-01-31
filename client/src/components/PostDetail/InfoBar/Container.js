import { connect } from 'react-redux';
import { attemptDeletePost } from '../../../actions/posts';
import PostDetailInfoBar from './Component';

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user
});

const mapDispatchToProps = { attemptDeletePost };

const PostDetailInfoBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailInfoBar);

export default PostDetailInfoBarContainer;
