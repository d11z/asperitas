import React from 'react';
import { reduxForm } from 'redux-form';
import Form from './Form';
import Label from './Label';
import Input from './Input';
import SubmitButton from './SubmitButton';

const SignupForm = props => (
  <Form>
    <Label htmlFor='username'>username</Label>
    <Input name='username' id='username' type='text' component='input' />
    <Label htmlFor='password'>password</Label>
    <Input name='password' id='password' type='password' component='input' />
    <Label htmlFor='password2'>confirm password</Label>
    <Input name='password2' id='password2' type='password' component='input' />
    <SubmitButton type='submit'>sign up</SubmitButton>
  </Form>
);

export default reduxForm({ form: 'signup' })(SignupForm);
