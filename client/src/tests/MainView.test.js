import React from 'react';
import { shallow } from 'enzyme';
import MainView from '../components/MainView';

it('renders without crashing', () => {
  shallow(<MainView />);
});
