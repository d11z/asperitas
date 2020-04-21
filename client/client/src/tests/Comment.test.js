import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../components/Comment';
import CommentDetailContainer from '../components/Comment/Detail/Container';
import CommentContent from '../components/Comment/Content';

it('renders without crashing', () => {
  shallow(<Comment />);
});

it('renders details about the comment', () => {
  const wrapper = shallow(<Comment />);
  expect(wrapper.contains(<CommentDetailContainer />)).toEqual(true);
});

it('renders the comment\'s content', () => {
  const comment = 'test comment';
  const wrapper = shallow(<Comment body={comment} />);
  expect(wrapper.find(CommentContent).exists()).toEqual(true);
  expect(
    wrapper
      .find(CommentContent)
      .children()
      .text()
  ).toEqual(comment);
});
