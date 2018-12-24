import React from 'react';
import styled from 'styled-components/macro';
import { reduxForm } from 'redux-form';
import Form from '../shared/Form';
import CommentFormTextArea from './TextArea';
import CommentFormSubmitButton from './SubmitButton';

const StyledForm = styled(Form)`
  padding: 0;
  border: 1px solid #eee;
  flex: 2;
`;

const CommentForm = () => (
  <StyledForm>
    <CommentFormTextArea name='comment' />
    <CommentFormSubmitButton />
  </StyledForm>
);

export default reduxForm({ form: 'comment' })(CommentForm);
