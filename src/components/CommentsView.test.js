import React from 'react';
import { shallow } from 'enzyme';
import CommentsView from './CommentsView';

it('renders without crashing', () => {
  shallow(<CommentsView/>);
});
