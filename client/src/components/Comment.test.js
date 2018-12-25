import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import Comment from './Comment';

it('renders without crashing', () => {
  shallow(<Comment />);
});

it('renders information about the comment', () => {
  const data = {
    author: { username: 'testuser1' },
    timestamp: '2018-11-05T05:02:38.544Z',
    body: 'example comment'
  };

  const wrapper = mount(<Comment {...data} />);

  expect(wrapper.find('Author').text()).toEqual(data.author.username);
  expect(wrapper.find('Timestamp').text()).toEqual(
    moment(data.created).fromNow()
  );
  expect(wrapper.find('Content').text()).toEqual(data.body);
});
