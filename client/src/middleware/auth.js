import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from '../actions/auth';

export default () => next => action => {
  if (action.type === LOGIN_SUCCESS || action.type === SIGNUP_SUCCESS) {
    localStorage.setItem('token', action.token);
  }
  next(action);
};
