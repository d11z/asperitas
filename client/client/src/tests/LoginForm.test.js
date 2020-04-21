import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../components/LoginForm/Component';

it('renders without crashing', () => {
  shallow(<LoginForm handleSubmit={fn => fn} />);
});
