import { api } from '../api';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const fetchPostsRequest = category => ({
  type: FETCH_POSTS_REQUEST,
  category
});

const fetchPostsSuccess = (category, posts) => ({
  type: FETCH_POSTS_SUCCESS,
  category,
  posts
});

const fetchPostsError = error => ({
  type: FETCH_POSTS_ERROR,
  error
});

export const fetchPosts = (category = '') => async dispatch => {
  dispatch(fetchPostsRequest(category));
  try {
    const posts = await api.getPosts(category);
    dispatch(fetchPostsSuccess(category, posts));
  } catch (error) {
    dispatch(fetchPostsError(error));
  }
};
