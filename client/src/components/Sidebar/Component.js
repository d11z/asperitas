import React from 'react';
import styled from 'styled-components/macro';
import SidebarCreatePostButton from './CreatePostButton';
import SidebarCategoryList from './CategoryList';
import SidebarCategoryListItem from './CategoryListItem';

const categories = ['all', 'test', 'test2', 'test3'];

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 240px;
  order: 1;
  margin-left: 24px;
  border: 1px solid #eee;
`;

const mapCategories = categories =>
  categories.map((category, index) => (
    <SidebarCategoryListItem key={index} category={category} />
  ));

const Sidebar = ({ isLoggedIn }) => (
  <Wrapper>
    {isLoggedIn && <SidebarCreatePostButton />}
    <SidebarCategoryList>{mapCategories(categories)}</SidebarCategoryList>
  </Wrapper>
);

export default Sidebar;
