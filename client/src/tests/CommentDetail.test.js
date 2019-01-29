import React from 'react';
import { shallow } from 'enzyme';
import CommentDetail from '../components/Comment/Detail/Component';
import CommentDetailTimestamp from '../components/Comment/Detail/Timestamp';

it('renders without crashing', () => {
  shallow(<CommentDetail author />);
});

it('renders the author', () => {
  const username = 'deniz';
  const wrapper = shallow(<CommentDetail author={{ username }} />);
  expect(wrapper.find('Author__CommentDetailAuthor').text()).toEqual(username);
});

it('renders the timestamp', () => {
  const wrapper = shallow(<CommentDetail author />);
  expect(wrapper.contains(<CommentDetailTimestamp />)).toEqual(true);
});
