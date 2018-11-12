import React from 'react';
import { shallow } from 'enzyme';
import CreatePostForm from './CreatePostForm';

it('renders without crashing', () => {
  shallow(<CreatePostForm />);
});
