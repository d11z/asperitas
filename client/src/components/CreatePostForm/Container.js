import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { attemptCreatePost } from '../../actions/posts';
import CreatePostForm from './Component';

const mapStateToProps = state => ({
  token: state.auth.token,
  post: state.posts.newPost
});

const mapDispatchToProps = { attemptCreatePost };

const CreatePostFormContainer = reduxForm({
  form: 'createPost',
  initialValues: { category: 'test' }
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreatePostForm)
);

export default CreatePostFormContainer;
