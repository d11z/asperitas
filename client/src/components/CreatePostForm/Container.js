import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import withAuth from '../../util/withAuth';
import { attemptCreatePost } from '../../actions/posts';
import categories from '../../categories';
import CreatePostForm from './Component';
import {
  titleValidator,
  urlValidator,
  contentValidator,
  typeValidator,
} from '../../util/validators';

const validate = fields => {
  const errors = {};
  const title = fields.title ? fields.title : '';
  const url = fields.url ? fields.url : '';
  const type = fields.type ? fields.type : '';
  const content = fields.content ? fields.content : '';

  errors.title = titleValidator(title);
  if (type === 'link') errors.url = urlValidator(url);
  if (type === 'content') errors.content = contentValidator(content);
  errors.type = typeValidator(type);

  return errors;
};

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  post: state.posts.newPost,
  form: state.form.createPost
});

const mapDispatchToProps = { attemptCreatePost };

const enhance = compose(
  reduxForm({
    form: 'createPost',
    initialValues: { category: categories[0], type: 'link' },
    validate
  }),
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const CreatePostFormContainer = enhance(CreatePostForm);

export default CreatePostFormContainer;
