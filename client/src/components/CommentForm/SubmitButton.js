import React from 'react';
import styled from 'styled-components/macro';
import SubmitButton from '../shared/form/SubmitButton';

const StyledSubmitButton = styled(SubmitButton)`
  margin: 4px 3px 3px;
  padding: 4px 8px;
`;

const CommentFormSubmitButton = () => (
  <StyledSubmitButton type='submit'>submit</StyledSubmitButton>
);

export default CommentFormSubmitButton;
