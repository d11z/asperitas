import React from 'react';
import styled from 'styled-components/macro';
import { Field } from 'redux-form';
import Input from '../shared/form/Input';

const TextArea = styled(Input)`
  margin: 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.border};
  border-radius: 0;
  resize: none;

  :hover,
  :focus {
    border: none;
    border-bottom: 1px solid ${props => props.theme.border};
    box-shadow: none;
  }
`;

class CommentFormTextArea extends React.Component {
  onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSubmit();
    }
  };

  renderField = field => (
    <TextArea
      as='textarea'
      {...field.input}
      placeholder='enter your comment'
      rows='2'
      onKeyDown={this.onKeyDown}
    />
  );

  render() {
    return <Field name={this.props.name} component={this.renderField} />;
  }
}

export default CommentFormTextArea;
