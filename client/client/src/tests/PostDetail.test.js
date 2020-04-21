import React from 'react';
import { shallow } from 'enzyme';
import PostDetail from '../components/PostDetail/Component';
import LoadingIndicatorBox from '../components/shared/LoadingIndicator/Box';
import PostDetailPost from '../components/PostDetail/Post';
import PostDetailCommentSection from '../components/PostDetail/CommentSection';
import Empty from '../components/shared/Empty';

it('renders without crashing', () => {
  shallow(<PostDetail fetchPost={fn => fn} />);
});

it('renders a post and its comment section', () => {
  const wrapper = shallow(<PostDetail fetchPost={fn => fn} post />);
  expect(wrapper.contains(<PostDetailPost />)).toEqual(true);
  expect(wrapper.contains(<PostDetailCommentSection />)).toEqual(true);
});

it('renders a loading indicator while fetching', () => {
  const wrapper = shallow(<PostDetail fetchPost={fn => fn} isFetching />);
  expect(wrapper.contains(<LoadingIndicatorBox />)).toEqual(true);
});

it('renders a message when the post doesn\'t exist', () => {
  const wrapper = shallow(<PostDetail fetchPost={fn => fn} />);
  expect(wrapper.contains(<Empty />)).toEqual(true);
});
