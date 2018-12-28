import { connect } from 'react-redux';
import { attemptVote } from '../../../actions/posts';
import PostVote from './Component';

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user
});

const mapDispatchToProps = { attemptVote };

const PostVoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostVote);

export default PostVoteContainer;
