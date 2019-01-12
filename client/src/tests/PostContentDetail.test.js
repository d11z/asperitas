import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import moment from 'moment';
import PostContentDetail from '../components/Post/Content/Detail';

it('renders without crashing', () => {
  shallow(<PostContentDetail />);
});

it('renders the information correctly', () => {
  const data = {
    author: { username: 'author' },
    created: '2018-11-05T05:02:38.544Z',
    commentCount: 0
  };

  const wrapper = mount(
    <MemoryRouter>
      <PostContentDetail {...data} />
    </MemoryRouter>
  );
  const details = wrapper.find('span');

  expect(details.at(1).text()).toEqual(data.author.username);
  expect(details.at(2).text()).toEqual(moment(data.created).fromNow());
  expect(wrapper.find('a').text()).toEqual('0 comments');
});
