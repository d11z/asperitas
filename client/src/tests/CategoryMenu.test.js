import React from 'react';
import { shallow } from 'enzyme';
import CategoryMenu from '../components/CategoryMenu/Component';

it('renders without crashing', () => {
  shallow(<CategoryMenu />);
});
