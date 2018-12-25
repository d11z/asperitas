import { reduxForm } from 'redux-form';
import CommentForm from './Component';

const CommentFormContainer = reduxForm({ form: 'comment' })(CommentForm);

export default CommentFormContainer;
