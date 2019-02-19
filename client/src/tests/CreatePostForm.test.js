import React from 'react';
import { shallow } from 'enzyme';
import CreatePostForm from '../components/CreatePostForm/Component';

it('renders without crashing', () => {
  const form = { values: {} };

  shallow(<CreatePostForm handleSubmit={fn => fn} form={form} />);
});
