import React from 'react';
import { shallow } from 'enzyme';

import Post from './Post';
import moment from 'moment';

it('renders without crashing', () => {
  shallow(<Post/>);
});

it('renders information about the post', () => {
  const data = {
    title: 'Test',
    url: 'http://google.com/',
    author: 'testuser1',
    score: 5,
    timestamp: '2018-11-05T05:02:38.544Z',
    comments: 12
  };

  const wrapper = shallow(
    <Post
      title={data.title}
      url={data.url}
      author={data.author}
      score={data.score}
      timestamp={data.timestamp}
      comments={data.comments}
    />
  );

  expect(wrapper.find('.post__title').text()).toEqual(data.title);
  expect(wrapper.find('.post__url').text()).toEqual(data.url);
  expect(wrapper.find('.post__author').text()).toEqual(data.author);
  expect(wrapper.find('.post__timestamp').text()).toEqual(moment(data.timestamp).fromNow());
  expect(wrapper.find('.post__comments').text()).toEqual(`${data.comments} comments`);
  expect(wrapper.find('.vote__score').text()).toEqual(data.score.toString());
});
