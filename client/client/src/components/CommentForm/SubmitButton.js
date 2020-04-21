import React from 'react';
import styled from 'styled-components/macro';
import SubmitButton from '../shared/form/SubmitButton';

const StyledSubmitButton = styled(SubmitButton)`
  margin: 4px;
  padding: 4px 12px;
`;

const CommentFormSubmitButton = () => (
  <StyledSubmitButton type='submit'>submit</StyledSubmitButton>
);

export default CommentFormSubmitButton;
