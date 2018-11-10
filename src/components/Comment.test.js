import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Comment from './Comment';

it('renders without crashing', () => {
  shallow(<Comment/>);
});

it('renders information about the comment', () => {
  const data = {
    author: 'testuser1',
    timestamp: '2018-11-05T05:02:38.544Z',
    text: 'example comment'
  };

  const wrapper = shallow(<Comment {...data}/>);

  expect(wrapper.find('Comment__Author').text()).toEqual(data.author);
  expect(wrapper.find('Comment__Timestamp').text()).toEqual(moment(data.timestamp).fromNow());
  expect(wrapper.find('Comment__Content').text()).toEqual(data.text);
});
