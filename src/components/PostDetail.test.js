import React from 'react';
import { shallow } from 'enzyme';
import PostDetail from './PostDetail';

it('renders without crashing', () => {
  shallow(<PostDetail/>);
});
