import React from 'react';
import styled from 'styled-components/macro';
import { link } from '../../shared/helpers';

const DeleteButton = styled.button`
  ${link};

  border: none;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  color: ${props => props.theme.normalText};
`;

const PostDetailInfoBarDeleteButton = props => (
  <DeleteButton onClick={props.deletePost}>delete</DeleteButton>
);

export default PostDetailInfoBarDeleteButton;
