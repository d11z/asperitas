import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from '../actions/posts';

const initialState = {
  isFetching: false,
  items: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts
      });
    case FETCH_POSTS_ERROR:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
};
