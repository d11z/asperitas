import {
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_SUCCESS,
  CREATE_POST_ERROR,
  CREATE_POST_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
  VOTE_ERROR,
  VOTE_SUCCESS
} from '../actions/posts';
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGOUT
} from '../actions/auth';
import { hideErrorClearTimeout, showErrorWithTimeout } from '../actions/error';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
    case FETCH_POST_SUCCESS:
    case CREATE_POST_SUCCESS:
    case CREATE_COMMENT_SUCCESS:
    case VOTE_SUCCESS:
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case LOGOUT:
      if (store.getState().error) store.dispatch(hideErrorClearTimeout());
      break;

    case FETCH_POSTS_ERROR:
    case FETCH_POST_ERROR:
    case CREATE_POST_ERROR:
    case CREATE_COMMENT_ERROR:
    case VOTE_ERROR:
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      store.dispatch(showErrorWithTimeout(action.error));
      break;

    default:
      break;
  }
};
