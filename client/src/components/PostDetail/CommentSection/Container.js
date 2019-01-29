import { connect } from 'react-redux';
import CommentSection from './Component';

const mapStateToProps = state => ({
  post: state.posts.post
});

const CommentSectionContainer = connect(mapStateToProps)(
  CommentSection
);

export default CommentSectionContainer;
