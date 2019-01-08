import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import HomeMainSection from './MainSection';
import PostListContainer from '../PostList/Container';
import PostDetailContainer from '../PostDetail/Container';
import SidebarContainer from '../Sidebar/Container';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 10vw;
`;

const Home = () => (
  <Wrapper>
    <HomeMainSection>
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
    </HomeMainSection>
    <Route component={SidebarContainer} />
  </Wrapper>
);

export default Home;
