import React from 'react';
import styled from 'styled-components/macro';
import { Field, reduxForm } from 'redux-form';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 2;
  background-color: #eee;
`;

const TextArea = styled(Field)`
  padding: 8px;
  border: 1px solid #eee;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 4px 16px;
  margin: 4px;
  font-size: 16px;
  border: 1px solid #eee;
`;

const CommentForm = props => (
  <Form>
    <TextArea
      name='comment'
      component='textarea'
      rows='3'
      placeholder='enter your comment'
    />
    <SubmitButton type='submit'>submit</SubmitButton>
  </Form>
);

export default reduxForm({ form: 'comment' })(CommentForm);
