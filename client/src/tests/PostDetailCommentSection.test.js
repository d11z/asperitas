import React from 'react';
import { shallow } from 'enzyme';
import PostDetailCommentSection from '../components/PostDetail/CommentSection/Component';
import CommentFormContainer from '../components/CommentForm/Container';
import CommentList from '../components/CommentList';

it('renders without crashing', () => {
  shallow(<PostDetailCommentSection post />);
});

it('renders a comment form if user is logged in', () => {
  const wrapper = shallow(<PostDetailCommentSection post token />);
  expect(wrapper.contains(<CommentFormContainer />)).toEqual(true);
});

it('doesn\'t render a comment form if user is not logged in', () => {
  const wrapper = shallow(<PostDetailCommentSection post />);
  expect(wrapper.contains(<CommentFormContainer />)).toEqual(false);
});

it('renders a list of comments', () => {
  const wrapper = shallow(<PostDetailCommentSection post />);
  expect(wrapper.contains(<CommentList />)).toEqual(true);
});
