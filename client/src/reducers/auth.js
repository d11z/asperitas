import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT
} from '../actions/auth';

const token = localStorage.getItem('token');
const initialState = token ? { token } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, loading: false, error: null, token: action.token };
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.error };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};
