import React from 'react';
import styled from 'styled-components/macro';

const CategoryList = styled.ul`
  list-style: none;
`;

const SidebarCategoryList = props => (
  <nav>
    <CategoryList>
      {props.children}
    </CategoryList>
  </nav>
);

export default SidebarCategoryList;
