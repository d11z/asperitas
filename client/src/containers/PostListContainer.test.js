import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PostListContainer from './PostListContainer';

it('renders without crashing', () => {
  const store = configureStore([thunk])({ posts: { items: [] } });
  shallow(<PostListContainer store={store} />).dive();
});
