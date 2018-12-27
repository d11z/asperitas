import React from 'react';
import styled from 'styled-components/macro';
import Input from '../shared/Input';

const TextArea = styled(Input)`
  margin-bottom: 0;
`;

const CommentFormTextArea = ({ name }) => (
  <TextArea
    name={name}
    component='textarea'
    rows='2'
    placeholder='enter your comment'
  />
);

export default CommentFormTextArea;
