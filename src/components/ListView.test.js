import React from 'react';
import { shallow } from 'enzyme';
import ListView from './ListView';

it('renders without crashing', () => {
  shallow(<ListView/>);
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

  const wrapper = shallow(
    <ListView posts={posts}/>
  );

  expect(wrapper.children()).toHaveLength(posts.length);
});
