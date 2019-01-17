import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/shared/form/Form';

it('renders without crashing', () => {
  shallow(<Form />);
});

it('renders a loading indicator', () => {
  const wrapper = shallow(<Form loading />);
  expect(wrapper.find('Spinner__LoadingIndicatorSpinner')).toHaveLength(1);
});
