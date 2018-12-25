import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

it('renders without crashing', () => {
  shallow(<LoginForm handleSubmit={fn => fn} />);
});
