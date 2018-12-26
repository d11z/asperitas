import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import PostDetailContainer from '../components/PostDetail/Container';

it('renders without crashing', () => {
  const store = configureStore([])({ posts: { isFetching: true } });
  shallow(<PostDetailContainer store={store} />);
});
