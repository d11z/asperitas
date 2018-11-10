import React from 'react';
import { shallow } from 'enzyme';
import ListView from './ListView';

it('renders without crashing', () => {
  shallow(<ListView/>);
});

it('renders a list of posts', () => {
  const posts = [ {}, {}, {} ];
  const wrapper = shallow(
    <ListView posts={posts}/>
  );

  expect(wrapper.children()).toHaveLength(posts.length);
});
