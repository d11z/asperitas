import React from 'react';
import { shallow } from 'enzyme';
import PostContent from '../components/Post/Content';
import PostContentTitle from '../components/Post/Content/Title';
import PostContentPreview from '../components/Post/Content/Preview';
import PostContentDetail from '../components/Post/Content/Detail';

it('renders without crashing', () => {
  shallow(<PostContent />);
});

it('renders a post\'s title, content preview, and details', () => {
  const wrapper = shallow(<PostContent type='link' />);
  expect(wrapper.containsMatchingElement(<PostContentTitle />)).toEqual(true);
  expect(wrapper.find(PostContentPreview).exists()).toEqual(true);
  expect(wrapper.contains(<PostContentDetail />)).toEqual(true);
});
