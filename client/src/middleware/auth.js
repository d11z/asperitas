import { LOGIN_SUCCESS } from '../actions/auth';

export default () => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.token);
  }
  next(action);
};
