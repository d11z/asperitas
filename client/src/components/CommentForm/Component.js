import React from 'react';
import styled from 'styled-components/macro';
import Form from '../shared/form/Form';
import { transition } from '../shared/helpers';
import CommentFormTextArea from './TextArea';
import CommentFormSubmitButton from './SubmitButton';

const StyledForm = styled(Form)`
  ${transition};

  margin-top: -1px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 0 0 2px 2px;
  max-width: none;
  padding: 0;

  :hover,
  :focus-within {
    border: 1px solid ${props => props.theme.accent};
  }

  :focus-within {
    box-shadow: 0 0 0 2px ${props => props.theme.accent + '4d'};
  }

  @media (max-width: 768px) {
    margin-top: -1px;
    border-radius: 0;
  }
`;

class CommentForm extends React.Component {
  createComment = comment =>
    this.props.attemptCreateComment(this.props.id, comment, this.props.token);

  onSubmit = () => this.props.handleSubmit(this.createComment);

  render() {
    return (
      <StyledForm onSubmit={this.onSubmit()}>
        <CommentFormTextArea name='comment' onSubmit={this.onSubmit()} />
        <CommentFormSubmitButton />
      </StyledForm>
    );
  }
}

export default CommentForm;
