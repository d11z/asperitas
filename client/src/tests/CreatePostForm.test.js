import React from 'react';
import { shallow } from 'enzyme';
import CreatePostForm from '../components/CreatePostForm/Component';

it('renders without crashing', () => {
  shallow(<CreatePostForm />);
});
