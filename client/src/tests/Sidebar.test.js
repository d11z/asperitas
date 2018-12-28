import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../components/Sidebar/Component';

it('renders without crashing', () => {
  shallow(<Sidebar />);
});
