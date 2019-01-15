import React from 'react';
import Form from '../shared/form/Form';
import { Field } from 'redux-form';
import SubmitButton from '../shared/form/SubmitButton';
import categories from '../../categories';
import renderField from '../shared/form/renderField';
import { required } from '../../util/validators';

class CreatePostForm extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { token, post, history } = this.props;
    if (!token) history.push('/');
    if (post) history.push(`/a/${post.category}/${post.id}`);
  }

  onSubmit = post => {
    this.props.attemptCreatePost(post, this.props.token);
  };

  mapCategories = () =>
    categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  render() {
    return (
      <Form
        loading={this.props.isFetching}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        <Field
          name='category'
          label='category'
          type='select'
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        <Field
          name='title'
          label='title'
          type='text'
          component={renderField}
          validate={required}
        />
        <Field
          name='url'
          label='url'
          type='text'
          component={renderField}
          validate={required}
        />
        <SubmitButton type='submit'>create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
