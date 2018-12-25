import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../components/PostList/Component';

it('renders without crashing', () => {
  shallow(<PostList />);
});

it('renders a list of posts', () => {
  const posts = [{}, {}, {}];
  const wrapper = shallow(<PostList posts={posts} />);

  expect(wrapper.children()).toHaveLength(posts.length);
});
