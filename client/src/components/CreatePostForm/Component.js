import React from 'react';
import styled from 'styled-components/macro';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import SubmitButton from '../shared/SubmitButton';

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
        <Label htmlFor='category'>category</Label>
        <Input name='category' id='category' component='select'>
          <option value='test'>test</option>
          <option value='test2'>test2</option>
          <option value='test3'>test3</option>
        </Input>
        <Label htmlFor='title'>title</Label>
        <Input name='title' id='title' type='text' component='input' />
        <Label htmlFor='url'>url</Label>
        <Input name='url' id='url' type='text' component='input' />
        <SubmitButton type='submit'>create post</SubmitButton>
      </WideForm>
    );
  }
}

export default CreatePostForm;
