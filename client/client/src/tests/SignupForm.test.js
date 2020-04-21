import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../components/SignupForm/Component';

it('renders without crashing', () => {
  shallow(<SignupForm handleSubmit={fn => fn} />);
});
