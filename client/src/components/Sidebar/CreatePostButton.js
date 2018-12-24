import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  padding: 16px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  color: #000;
  border: none;
  background-color: #eee;
`;

const SidebarCreatePostButton = () => (
  <Button to='/createpost'>create post</Button>
);

export default SidebarCreatePostButton;
