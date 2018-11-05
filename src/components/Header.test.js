import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('renders without crashing', () => {
  shallow(<Header/>);
});

it('renders current subreddit', () => {
  const subreddit = 'all';
  const wrapper = shallow(<Header subreddit={subreddit}/>);

  expect(wrapper.find('.header__subreddit').text()).toEqual(`r/${subreddit}`);
});
