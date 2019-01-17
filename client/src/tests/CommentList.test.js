import React from 'react';
import { shallow } from 'enzyme';
import CommentList from '../components/CommentList';

it('renders without crashing', () => {
  shallow(<CommentList />);
});

it('render a list of comments', () => {
  const comments = [{}, {}, {}];
  const wrapper = shallow(<CommentList comments={comments} />);
  expect(wrapper.children()).toHaveLength(comments.length);
});
