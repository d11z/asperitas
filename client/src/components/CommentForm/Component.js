import React from 'react';
import styled from 'styled-components/macro';
import Form from '../shared/Form';
import CommentFormTextArea from './TextArea';
import CommentFormSubmitButton from './SubmitButton';

const StyledForm = styled(Form)`
  margin-bottom: 16px;
  border: 1px solid #eee;
  max-width: none;
  padding: 0;
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
