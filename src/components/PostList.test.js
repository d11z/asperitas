import React from 'react';
import { shallow } from 'enzyme';

import PostList from './PostList';

it('renders without crashing', () => {
  shallow(<PostList/>);
});

it('renders a list of posts', () => {
  const posts = [
    {
      title: 'Test',
      url: 'http://google.com/',
      author: 'testuser1',
      score: 5,
      timestamp: '2018-11-05T05:02:38.544Z',
      comments: 12
    },
    {
      title: 'Another post',
      url: 'http://yahoo.com/',
      author: 'testuser2',
      score: 2,
      timestamp: '2018-11-05T05:02:38.544Z',
      comments: 5
    }
  ];

  const wrapper = shallow(<PostList posts={posts}/>);

  expect(wrapper.children()).toHaveLength(posts.length);
});
