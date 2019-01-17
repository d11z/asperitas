import React from 'react';
import { shallow } from 'enzyme';
import PostDetailCommentSection from '../components/PostDetail/CommentSection/Component';
import CommentFormContainer from '../components/CommentForm/Container';
import CommentList from '../components/CommentList';
import Empty from '../components/shared/Empty';

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
  const comments = [{}];
  const post = { comments };
  const wrapper = shallow(<PostDetailCommentSection post={post} />);
  expect(wrapper.contains(<CommentList comments={comments} />)).toEqual(true);
});

it('renders a message when there are no comments', () => {
  const wrapper = shallow(<PostDetailCommentSection post />);
  expect(wrapper.contains(<Empty comments />)).toEqual(true);
});
