import React from 'react';
import styled from 'styled-components/macro';
import Input from '../Input';

const TextArea = styled(Input)`
  margin-bottom: 0;
`;

const CommentFormTextArea = ({ name }) => (
  <TextArea
    name={name}
    component='textarea'
    rows='3'
    placeholder='enter your comment'
  />
);

export default CommentFormTextArea;
