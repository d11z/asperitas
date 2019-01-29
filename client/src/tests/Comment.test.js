import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../components/Comment';
import CommentDetailContainer from '../components/Comment/Detail/Container';

it('renders without crashing', () => {
  shallow(<Comment />);
});

it('renders details about the comment', () => {
  const wrapper = shallow(<Comment />);
  expect(wrapper.contains(<CommentDetailContainer />)).toEqual(true);
});

it('renders the content of the comment', () => {
  const comment = 'test comment';
  const wrapper = shallow(<Comment body={comment} />);
  expect(wrapper.find('Content__CommentContent').text()).toEqual(comment);
});
