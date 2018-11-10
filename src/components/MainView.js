import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import PostListContainer from '../containers/PostListContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 32px;
`;

const Main = styled.main`
  flex: 1;
`;

const MainView = props => (
  <Wrapper>
    <Sidebar/>
    <Main>
      <Route exact path='/' component={PostListContainer}/>
      <Route exact path='/r/:category' render={({ match }) =>
        <PostListContainer category={match.params.category}/>
      }/>
      <Route exact path='/r/:category/:post' render={({ match }) =>
        <PostDetailContainer postId={match.params.post}/>
      }/>
    </Main>
  </Wrapper>
);

export default MainView;
