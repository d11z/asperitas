import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ListViewContainer from '../containers/ListViewContainer';
import CommentsViewContainer from '../containers/CommentsViewContainer';

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
      <Route exact path='/' component={ListViewContainer}/>
      <Route exact path='/r/:category' render={({ match }) =>
        <ListViewContainer category={match.params.category}/>
      }/>
      <Route exact path='/r/:category/:post' render={({ match }) =>
        <CommentsViewContainer postId={match.params.post}/>
      }/>
    </Main>
  </Wrapper>
);

export default MainView;
