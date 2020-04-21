import React from 'react';
import { shallow } from 'enzyme';
import CommentForm from '../components/CommentForm/Component';

it('renders without crashing', () => {
  shallow(<CommentForm handleSubmit={fn => fn} />);
});
