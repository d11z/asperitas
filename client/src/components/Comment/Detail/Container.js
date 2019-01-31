import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../../util/withAuth';
import { attemptDeleteComment } from '../../../actions/posts';
import CommentDetail from './Component';

const mapStateToProps = state => ({
  post: state.posts.post.id
});

const mapDispatchToProps = { attemptDeleteComment };

const enhance = compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const CommentDetailContainer = enhance(CommentDetail);

export default CommentDetailContainer;
