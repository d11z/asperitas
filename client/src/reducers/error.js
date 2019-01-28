import {
  FETCH_POSTS_ERROR,
  FETCH_POST_ERROR,
  CREATE_POST_ERROR,
  DELETE_POST_ERROR,
  CREATE_COMMENT_ERROR,
  VOTE_ERROR
} from '../actions/posts';
import { LOGIN_ERROR, SIGNUP_ERROR } from '../actions/auth';
import { HIDE_ERROR } from '../actions/error';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_ERROR:
    case FETCH_POST_ERROR:
    case CREATE_POST_ERROR:
    case DELETE_POST_ERROR:
    case CREATE_COMMENT_ERROR:
    case VOTE_ERROR:
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return action.error;

    case HIDE_ERROR:
      return null;

    default:
      return state;
  }
};
