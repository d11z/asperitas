import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import Post from './Post';

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
    <Post {...data}/>
  );

  expect(wrapper.find('Post__TitleLink').text()).toEqual(data.title);
  expect(wrapper.find('Post__Url').text()).toEqual(data.url);
  expect(wrapper.find('Post__DetailWrapper').childAt(1).text()).toEqual(data.author);
  expect(wrapper.find('Post__DetailWrapper').childAt(2).text()).toEqual(moment(data.timestamp).fromNow());
  expect(wrapper.find('Post__DetailWrapper').childAt(3).childAt(0).text()).toEqual(`${data.comments} comments`);
  expect(wrapper.find('Post__Score').text()).toEqual(data.score.toString());
});
