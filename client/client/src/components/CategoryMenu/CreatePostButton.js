import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const CreatePostButton = styled(Button)`
  display: flex;
  align-items: center;
  border-radius: 0;
  padding: 0 16px;
  text-decoration: none;
`;

const CategoryMenuCreatePostButton = () => (
  <CreatePostButton as={Link} to='/createpost'>create post</CreatePostButton>
);

export default CategoryMenuCreatePostButton;
