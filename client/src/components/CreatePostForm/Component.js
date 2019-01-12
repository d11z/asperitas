import React from 'react';
import styled from 'styled-components/macro';
import Form from '../shared/form/Form';
import { Field } from 'redux-form';
import renderField from '../shared/form/renderField';
import { required } from '../../util/validators';
import SubmitButton from '../shared/form/SubmitButton';

const WideForm = styled(Form)`
  max-width: 500px;
`;

class CreatePostForm extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { token, post, history } = this.props;
    if (!token) history.push('/');
    if (post) history.push(`/a/${post.category}/${post.id}`);
  }

  onSubmit = post => {
    console.log(post);
    this.props.attemptCreatePost(post, this.props.token);
  };

  render() {
    return (
      <WideForm onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name='category'
          label='category'
          type='select'
          component={renderField}
        >
          <option value='test'>test</option>
          <option value='test2'>test2</option>
          <option value='test3'>test3</option>
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
      </WideForm>
    );
  }
}

export default CreatePostForm;
