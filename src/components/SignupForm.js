import React from 'react';
import styled from 'styled-components/macro';
import { Field, reduxForm } from 'redux-form';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background-color: #eee;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  color: #6f6f6f;
`;

const Input = styled(Field)`
  width: 300px;
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 4px 16px;
  margin-top: 8px;
  font-size: 16px;
  border: 1px solid #eee;
`;

const SignupForm = props => (
  <Wrapper>
    <Form>
      <Label htmlFor='username'>username</Label>
      <Input name='username' id='username' type='text' component='input' />
      <Label htmlFor='password'>password</Label>
      <Input name='password' id='password' type='password' component='input' />
      <Label htmlFor='password2'>confirm password</Label>
      <Input name='password2' id='password2' type='password' component='input' />
      <SubmitButton type='submit'>sign up</SubmitButton>
    </Form>
  </Wrapper>
);

export default reduxForm({ form: 'signup' })(SignupForm);
