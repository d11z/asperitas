import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Component';
import HeaderLogo from '../components/Header/Logo';
import HeaderDarkButtonContainer from '../components/Header/DarkButton/Container';
import DropdownButton from '../components/DropdownButton/Component';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders a logo link', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.contains(<HeaderLogo />)).toEqual(true);
});

it('renders a dark mode toggle button', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.contains(<HeaderDarkButtonContainer />)).toEqual(true);
});

it('renders log in and sign up links when not logged in', () => {
  const wrapper = shallow(<Header />);
  const links = wrapper.find('NavLink__HeaderNavLink');

  expect(links).toHaveLength(2);
  expect(links.at(0).text()).toEqual('log in');
  expect(links.at(1).text()).toEqual('sign up');
});

it('renders a log out link when logged in', () => {
  const wrapper = shallow(<Header user />);
  const link = wrapper.find('NavLink__HeaderNavLink');
  expect(link.text()).toEqual('log out');
});

it("renders the user's username when logged in", () => {
  const username = 'deniz';
  const wrapper = shallow(<Header user={{ username }} />);
  expect(
    wrapper.contains(
      <DropdownButton
        options={{
          profile: `/u/${username}`,
          settings: '/settings'
        }}
        username={username}
      />
    )
  ).toEqual(true);
});
