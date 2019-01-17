import React from 'react';
import { shallow } from 'enzyme';
import PostContent from '../components/Post/Content';
import PostContentTitle from '../components/Post/Content/Title';
import PostContentUrl from '../components/Post/Content/Url';
import PostContentDetail from '../components/Post/Content/Detail';

it('renders without crashing', () => {
  shallow(<PostContent />);
});

it('renders a post\'s title, url, and details', () => {
  const wrapper = shallow(<PostContent />);
  expect(wrapper.contains(<PostContentTitle />)).toEqual(true);
  expect(wrapper.contains(<PostContentUrl />)).toEqual(true);
  expect(wrapper.contains(<PostContentDetail />)).toEqual(true);
});
