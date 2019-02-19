import React from 'react';
import styled from 'styled-components/macro';
import SidebarCategoryListItem from './Item';
import SidebarCategoryListHeader from './Header';

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const mapCategories = categories =>
  categories.map((category, index) => (
    <SidebarCategoryListItem
      key={category.id}
      category={category.title}
      label={category.title}
    />
  ));

const SidebarCategoryList = ({ categories }) => (
  <CategoryList>
    <SidebarCategoryListHeader />
    <SidebarCategoryListItem label='frontpage' />
    {!categories.isFetching && mapCategories([...categories.items])}
  </CategoryList>
);

export default SidebarCategoryList;
