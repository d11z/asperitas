import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  createComment,
  castVote
} from '../util/api';

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

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

const fetchPostRequest = { type: FETCH_POST_REQUEST };
const fetchPostSuccess = post => ({ type: FETCH_POST_SUCCESS, post });
const fetchPostError = error => ({ type: FETCH_POST_ERROR, error });

export const fetchPost = id => async dispatch => {
  dispatch(fetchPostRequest);
  try {
    const post = await getPost(id);
    dispatch(fetchPostSuccess(post));
  } catch (error) {
    dispatch(fetchPostError(error));
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

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

const deletePostRequest = { type: DELETE_POST_REQUEST };
const deletePostSuccess = post => ({ type: DELETE_POST_SUCCESS, post });
const deletePostError = error => ({ type: DELETE_POST_ERROR, error });

export const attemptDeletePost = (id, token) => async dispatch => {
  dispatch(deletePostRequest);
  try {
    await deletePost(id, token);
    dispatch(deletePostSuccess(id));
  } catch (error) {
    dispatch(deletePostError(error));
  }
};

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

const createCommentRequest = { type: CREATE_COMMENT_REQUEST };
const createCommentSuccess = post => ({ type: CREATE_COMMENT_SUCCESS, post });
const createCommentError = error => ({ type: CREATE_COMMENT_ERROR, error });

export const attemptCreateComment = (id, comment, token) => async dispatch => {
  dispatch(createCommentRequest);
  try {
    const json = await createComment(id, comment, token);
    dispatch(createCommentSuccess(json));
  } catch (error) {
    dispatch(createCommentError(error));
  }
};

export const VOTE_REQUEST = 'VOTE_REQUEST';
export const VOTE_SUCCESS = 'VOTE_SUCCESS';
export const VOTE_ERROR = 'VOTE_ERROR';

const voteRequest = { type: VOTE_REQUEST };
const voteSuccess = post => ({ type: VOTE_SUCCESS, post });
const voteError = error => ({ type: VOTE_ERROR, error });

export const attemptVote = (id, vote, token) => async dispatch => {
  dispatch(voteRequest);
  try {
    const post = await castVote(id, vote, token);
    dispatch(voteSuccess(post));
  } catch (error) {
    dispatch(voteError(error));
  }
};
