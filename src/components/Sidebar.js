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

const Button = styled.button`
  padding: 16px;
  font-size: 16px;
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

const Sidebar = props => (
  <Wrapper>
    <Button>create post</Button>
    <nav>
      <List>
        <Item>
          <Link to='/'>r/all</Link>
        </Item>
        <Item>
          <Link to='/r/webdev'>r/webdev</Link>
        </Item>
        <Item>
          <Link to='/r/javascript'>r/javascript</Link>
        </Item>
        <Item>
          <Link to='/r/vim'>r/vim</Link>
        </Item>
      </List>
    </nav>
  </Wrapper>
);

export default Sidebar;
