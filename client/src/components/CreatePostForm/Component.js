import React from 'react';
import { Field } from 'redux-form';
import categories from '../../categories';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const postTypes = [
  {
    label: 'Link',
    value: 'link'
  },
  {
    label: 'Text Post',
    value: 'content'
  }
];

class CreatePostForm extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { token, post, history } = this.props;
    if (!token) history.push('/');
    if (post) history.push(`/a/${post.category}/${post.id}`);
  }

  onSubmit = post => this.props.attemptCreatePost(post);

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
          label='Post Title'
          type='text'
          component={renderField}
        />
        <Field
          name='type'
          label='type'
          type='radio-tabs'
          component={renderField}
          options={postTypes}
        />
        {this.props.form.values.type === 'link' && (
          <Field
            name='url'
            label='Post URL'
            type='url'
            component={renderField}
          />
        )}
        {this.props.form.values.type === 'content' && (
          <Field
            name='content'
            label='Content'
            type='text'
            component={renderField}
          />
        )}
        <SubmitButton type='submit'>create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
