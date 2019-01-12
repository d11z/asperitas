import React from 'react';
import { shallow } from 'enzyme';
import PostDetailCommentSection from '../components/PostDetail/CommentSection/Component';

it('renders without crashing', () => {
  shallow(<PostDetailCommentSection post={{}} />);
});
