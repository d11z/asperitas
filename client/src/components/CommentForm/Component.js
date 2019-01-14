import React from 'react';
import styled from 'styled-components/macro';
import Form from '../shared/form/Form';
import { transition } from '../shared/helpers';
import CommentFormTextArea from './TextArea';
import CommentFormSubmitButton from './SubmitButton';

const StyledForm = styled(Form)`
  ${transition};
  
  margin-bottom: 8px;
  border: 1px solid ${props => props.theme.border};
  max-width: none;
  padding: 0;
  
  :hover, :focus-within {
    border: 1px solid ${props => props.theme.accent};
  }
  
  :focus-within {
    box-shadow: 0 0 0 2px ${props => props.theme.accent + '4d'};
  }
  
  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

class CommentForm extends React.Component {
  onSubmit = comment => {
    const { id, token, attemptCreateComment } = this.props;
    attemptCreateComment(id, comment, token);
  };

  render() {
    return (
      <StyledForm onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <CommentFormTextArea name='comment' />
        <CommentFormSubmitButton />
      </StyledForm>
    );
  }
}

export default CommentForm;
