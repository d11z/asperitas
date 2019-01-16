import { LOGIN_ERROR, SIGNUP_ERROR } from '../actions/auth';
import { HIDE_ERROR } from '../actions/error';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return action.error;
    case HIDE_ERROR:
      return null;
    default:
      return state;
  }
};
