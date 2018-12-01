import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Comment from './Comment';

it('renders without crashing', () => {
  shallow(<Comment />);
});

it('renders information about the comment', () => {
  const data = {
    author: { username: 'testuser1' },
    created: '2018-11-05T05:02:38.544Z',
    body: 'example comment'
  };

  const wrapper = shallow(<Comment {...data} />);

  expect(wrapper.find('Comment__Author').text()).toEqual(data.author.username);
  expect(wrapper.find('Comment__Timestamp').text()).toEqual(
    moment(data.created).fromNow()
  );
  expect(wrapper.find('Comment__Content').text()).toEqual(data.body);
});
