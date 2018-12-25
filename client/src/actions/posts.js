import { createPost, getPosts } from '../api';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const fetchPostsRequest = { type: FETCH_POSTS_REQUEST };
const fetchPostsSuccess = posts => ({ type: FETCH_POSTS_SUCCESS, posts });
const fetchPostsError = error => ({ type: FETCH_POSTS_ERROR, error });

export const fetchPosts = (category = '') => async dispatch => {
  dispatch(fetchPostsRequest);
  try {
    const posts = await getPosts(category);
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsError(error));
  }
};

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

const createPostRequest = { type: CREATE_POST_REQUEST };
const createPostSuccess = post => ({ type: CREATE_POST_SUCCESS, post });
const createPostError = error => ({ type: CREATE_POST_ERROR, error });

export const attemptCreatePost = (post, token) => async dispatch => {
  dispatch(createPostRequest);
  try {
    const newPost = await createPost(post, token);
    dispatch(createPostSuccess(newPost));
  } catch (error) {
    dispatch(createPostError(error));
  }
};
