import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import CommentForm from './Component';
import { attemptCreateComment } from '../../actions/posts';

const mapStateToProps = state => ({ token: state.auth.token });
const mapDispatchToProps = { attemptCreateComment };

const CommentFormContainer = reduxForm({ form: 'comment' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentForm)
);

export default CommentFormContainer;
