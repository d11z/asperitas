import React from 'react';
import { shallow } from 'enzyme';

import MainView from './MainView';

it('renders without crashing', () => {
  shallow(<MainView/>);
});
