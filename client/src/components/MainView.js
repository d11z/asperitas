import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import SidebarContainer from './Sidebar/Container';
import PostListContainer from './PostList/Container';
import PostDetailContainer from './PostDetail/Container';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Main = styled.main`
  flex: 1;
`;

const MainView = () => (
  <Wrapper>
    <SidebarContainer />
    <Main>
      <Route exact path='/' component={PostListContainer} />
      <Route
        exact
        path='/a/:category'
        render={({ match }) => (
          <PostListContainer category={match.params.category} />
        )}
      />
      <Route
        exact
        path='/a/:category/:post'
        render={({ match }) => (
          <PostDetailContainer id={match.params.post} />
        )}
      />
    </Main>
  </Wrapper>
);

export default MainView;
