import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import { MemoryRouter } from 'react-router-dom';
import Post from '../components/Post';

it('renders without crashing', () => {
  shallow(<Post />);
});

it('renders information about the post', () => {
  const data = {
    title: 'Test',
    url: 'http://google.com/',
    author: { username: 'testuser1' },
    score: 5,
    created: '2018-11-05T05:02:38.544Z',
    comments: []
  };

  const wrapper = mount(
    <MemoryRouter>
      <Post {...data} />
    </MemoryRouter>
  );

  expect(wrapper.find('Title').text()).toEqual(data.title);
  expect(wrapper.find('Url').text()).toEqual(data.url);
  expect(
    wrapper
      .find('Detail__Wrapper')
      .find('span')
      .at(1)
      .text()
  ).toEqual(data.author.username);
  expect(
    wrapper
      .find('Detail__Wrapper')
      .find('span')
      .at(2)
      .text()
  ).toEqual(moment(data.created).fromNow());
  expect(
    wrapper
      .find('Detail__Wrapper')
      .find('a')
      .text()
  ).toEqual(`${data.comments.length} comments`);
  expect(
    wrapper
      .find('Vote__Wrapper')
      .find('span')
      .text()
  ).toEqual(data.score.toString());
});
