import React from 'react';
import { reduxForm } from 'redux-form';
import Form from './Form';
import Label from './Label';
import Input from './Input';
import SubmitButton from './SubmitButton';

const LoginForm = props => (
  <Form>
    <Label htmlFor='username'>username</Label>
    <Input name='username' id='username' type='text' component='input' />
    <Label htmlFor='password'>password</Label>
    <Input name='password' id='password' type='password' component='input' />
    <SubmitButton type='submit'>log in</SubmitButton>
  </Form>
);

export default reduxForm({ form: 'login' })(LoginForm);
