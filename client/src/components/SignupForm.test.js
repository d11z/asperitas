import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from './SignupForm';

it('renders without crashing', () => {
  shallow(<SignupForm handleSubmit={fn => fn} />);
});
