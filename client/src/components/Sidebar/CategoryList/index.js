import React from 'react';
import styled from 'styled-components/macro';
import SidebarCategoryListItem from './Item';
import SidebarCategoryListHeader from './Header';
import categories from '../../../categories';

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const mapCategories = categories =>
  categories.map((category, index) => (
    <SidebarCategoryListItem key={index} category={category} />
  ));

const SidebarCategoryList = () => (
  <CategoryList>
    <SidebarCategoryListHeader />
    {mapCategories(['all', ...categories])}
  </CategoryList>
);

export default SidebarCategoryList;
