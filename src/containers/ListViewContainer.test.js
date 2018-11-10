import React from 'react';
import { mapStateToProps } from './ListViewContainer';

it('sorts post by score', () => {
  const posts = [
    { score: 5 },
    { score: 21 }
  ];

  const initialState = { posts };

  expect(mapStateToProps(initialState, {}).posts[0].score).toEqual(21);
});

it('filters posts by category', () => {
  const posts = [
    { category: 'vim' },
    { category: 'javascript' }
  ];

  const initialState = { posts };
  const ownProps = { category: 'vim' };

  expect(mapStateToProps(initialState, ownProps).posts).toHaveLength(1);
});
