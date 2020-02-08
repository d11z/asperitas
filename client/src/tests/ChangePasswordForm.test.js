import React from 'react';
import { shallow } from 'enzyme';
import ChangePasswordForm from '../components/ChangePasswordForm/Component';

it('renders without crashing', () => {
  shallow(<ChangePasswordForm handleSubmit={fn => fn} />);
});
