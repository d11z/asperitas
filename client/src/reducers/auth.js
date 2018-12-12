import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/auth';

const token = localStorage.getItem('token');
const initialState = token ? { token } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loggingIn: true };
    case LOGIN_SUCCESS:
      return { ...state, loggingIn: false, error: null, token: action.token };
    case LOGIN_ERROR:
      return { ...state, loggingIn: false, error: action.error };
    default:
      return state;
  }
};
