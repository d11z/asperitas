import React from 'react';
import { mount, shallow } from 'enzyme';

import { ListView } from './ListView';

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
    <ListView
      posts={posts}
      match={{
        params: {}
      }}
    />
  );

  expect(wrapper.children()).toHaveLength(posts.length);
});

it('sorts post by score', () => {
  const posts = [
    { score: 5 },
    { score: 21 }
  ];

  const wrapper = mount(
    <ListView
      posts={posts}
      match={{
        params: {}
      }}
    />
  ).find('li');

  expect(wrapper.at(0).find('.vote__score').text()).toEqual('21');
});

it('filters posts by category', () => {
  const posts = [
    { category: 'vim' },
    { category: 'javascript' }
  ];

  const wrapper = shallow(
    <ListView
      posts={posts}
      match={{
        params: {
          category: 'vim'
        }
      }}
    />
  );

  expect(wrapper.children()).toHaveLength(1);
});
