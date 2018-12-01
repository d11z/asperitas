import { mapStateToProps } from './PostDetailContainer';

it('displays the correct post', () => {
  const items = [{ id: 0 }, { id: 1 }];
  const initialState = { posts: { items } };

  expect(mapStateToProps(initialState, { postId: 1 }).post.id).toEqual(1);
});
