import { reduxForm } from 'redux-form';
import CreatePostForm from './Component';

const CreatePostFormContainer = reduxForm({ form: 'createPost' })(
  CreatePostForm
);

export default CreatePostFormContainer;
