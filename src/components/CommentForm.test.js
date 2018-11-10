import React from 'react';
import { shallow } from 'enzyme';
import CommentForm from './CommentForm';

it('renders without crashing', () => {
  shallow(<CommentForm />);
});
