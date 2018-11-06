import React from 'react';
import { shallow } from 'enzyme';

import SubredditPage from './SubredditPage';

it('renders without crashing', () => {
  shallow(<SubredditPage/>);
});
