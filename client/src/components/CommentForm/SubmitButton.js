import React from 'react';
import styled from 'styled-components/macro';
import SubmitButton from '../shared/SubmitButton';

const StyledSubmitButton = styled(SubmitButton)`
  padding: 4px 8px;
  margin: 4px 3px 3px;
  font-size: 13px;
`;

const CommentFormSubmitButton = () => (
  <StyledSubmitButton type='submit'>submit</StyledSubmitButton>
);

export default CommentFormSubmitButton;
