import { login, signup, changePassword } from '../util/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const loginRequest = { type: LOGIN_REQUEST };
const loginSuccess = token => ({ type: LOGIN_SUCCESS, token });
const loginError = error => ({ type: LOGIN_ERROR, error });

export const attemptLogin = (username, password) => async dispatch => {
  dispatch(loginRequest);
  try {
    const token = await login(username, password);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

const signupRequest = { type: SIGNUP_REQUEST };
const signupSuccess = token => ({ type: SIGNUP_SUCCESS, token });
const signupError = error => ({ type: SIGNUP_ERROR, error });

export const attemptSignup = (username, password) => async dispatch => {
  dispatch(signupRequest);
  try {
    const token = await signup(username, password);
    dispatch(signupSuccess(token));
  } catch (error) {
    dispatch(signupError(error));
  }
};

export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });

export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED';

const changePasswordRequest = { type: CHANGE_PASSWORD_REQUEST };
const changePasswordSuccess = { type: CHANGE_PASSWORD_SUCCESS };
const changePasswordFailed = error => ({
  type: CHANGE_PASSWORD_FAILED,
  error
});

export const attemptPasswordChange = (oldPwd, newPwd) => async (
  dispatch,
  getState
) => {
  dispatch(changePasswordRequest);
  try {
    const { token } = getState().auth;

    console.log(token);
    if (!token) {
      throw new Error('Not Authorized');
    }

    await changePassword(oldPwd, newPwd, token);
    dispatch(changePasswordSuccess);
  } catch (error) {
    console.log(error);
    dispatch(changePasswordFailed(error));
  }
};
