import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../../util/withAuth';
import { attemptDeleteComment } from '../../../actions/posts';
import CommentDetail from './Component';

const mapDispatchToProps = { attemptDeleteComment };

const enhance = compose(
  withAuth,
  connect(
    null,
    mapDispatchToProps
  )
);

const CommentDetailContainer = enhance(CommentDetail);

export default CommentDetailContainer;
