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

export const fetchPosts = (category = '') => dispatch => {
  let url = 'https://' + window.location.hostname;
  if (process.env.NODE_ENV === 'development') url = 'http://localhost:8080';

  dispatch(fetchPostsRequest(category));

  return fetch(`${url}/api/posts/${category}`)
    .then(response => response.json())
    .then(json => dispatch(fetchPostsSuccess(category, json)))
    .catch(err => dispatch(fetchPostsError(err)));
};
