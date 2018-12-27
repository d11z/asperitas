import { connect } from 'react-redux';
import CommentSection from './Component';

const mapStateToProps = state => ({
  token: state.auth.token,
  post: state.posts.post
});

const CommentSectionContainer = connect(mapStateToProps)(
  CommentSection
);

export default CommentSectionContainer;
