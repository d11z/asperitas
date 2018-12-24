import React from 'react';
import styled from 'styled-components/macro';
import { reduxForm } from 'redux-form';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import SubmitButton from './shared/SubmitButton';

const WideForm = styled(Form)`
  max-width: 500px;
`;

const CreatePostForm = props => (
  <WideForm>
    <Label htmlFor='category'>subreddit</Label>
    <Input name='category' id='category' component='select'>
      <option value='webdev'>r/webdev</option>
      <option value='javascript'>r/javascript</option>
      <option value='vim'>r/vim</option>
    </Input>
    <Label htmlFor='title'>title</Label>
    <Input name='title' id='title' type='text' component='input' />
    <Label htmlFor='url'>url</Label>
    <Input name='url' id='url' type='text' component='input' />
    <SubmitButton type='submit'>create post</SubmitButton>
  </WideForm>
);

export default reduxForm({ form: 'createPost' })(CreatePostForm);
