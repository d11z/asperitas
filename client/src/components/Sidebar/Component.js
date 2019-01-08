import React from 'react';
import styled from 'styled-components/macro';
import SidebarCreatePostButton from './CreatePostButton';
import SidebarCategoryList from './CategoryList';

const categories = ['all', 'test', 'music', 'test3'];

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 240px;
  margin-left: 24px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  background-color: #ffffff;
`;

const Sidebar = ({ isLoggedIn }) => (
  <Wrapper>
    {isLoggedIn && <SidebarCreatePostButton />}
    <SidebarCategoryList categories={categories} />
  </Wrapper>
);

export default Sidebar;
