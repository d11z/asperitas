import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  border: none;
  padding: 16px;
  background-color: #eee;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.normalText};
`;

const SidebarCreatePostButton = () => (
  <Button to='/createpost'>create post</Button>
);

export default SidebarCreatePostButton;
