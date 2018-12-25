import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Component';

it('renders without crashing', () => {
  shallow(<Header />);
});
