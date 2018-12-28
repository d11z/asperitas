import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Item = styled.li`
  padding: 8px;
  border-bottom: 1px solid #eee;

  :last-child {
    border: none;
  }
`;

const SidebarCategoryListItem = ({ category }) => (
  <Item>
    <Link to={category === 'all' ? '/' : `/a/${category}`}>{category}</Link>
  </Item>
);

export default SidebarCategoryListItem;
