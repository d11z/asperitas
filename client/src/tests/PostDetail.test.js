import React from 'react';
import { shallow } from 'enzyme';
import PostDetail from '../components/PostDetail/Component';

it('renders without crashing', () => {
  shallow(<PostDetail />);
});
