import React from 'react';
import { shallow } from 'enzyme';
import PostContent from '../components/Post/Content';

it('renders without crashing', () => {
  shallow(<PostContent />);
});
