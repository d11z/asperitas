import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  order: 1;
  flex-basis: 240px;
  margin-left: 24px;
  border: 1px solid #eee;
`;

const Button = styled(Link)`
  padding: 16px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  color: #000;
  border: none;
  background-color: #eee;
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  padding: 8px;
  border-bottom: 1px solid #eee;

  :last-child {
    border: none;
  }
`;

// TODO: fetch categories from server
const Sidebar = props => (
  <Wrapper>
    <Button to='/createpost'>create post</Button>
    <nav>
      <List>
        <Item>
          <Link to='/'>r/all</Link>
        </Item>
        <Item>
          <Link to='/r/test'>r/test</Link>
        </Item>
        <Item>
          <Link to='/r/test2'>r/test2</Link>
        </Item>
        <Item>
          <Link to='/r/test3'>r/test3</Link>
        </Item>
      </List>
    </nav>
  </Wrapper>
);

export default Sidebar;
