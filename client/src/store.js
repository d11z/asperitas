import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import form from './reducers/form';
import error from './reducers/error';
import auth from './reducers/auth';
import posts from './reducers/posts';
import authMiddleware from './middleware/auth';
import errorMiddleware from './middleware/error';

export default createStore(
  combineReducers({ form, error, auth, posts }),
  applyMiddleware(thunk, authMiddleware, errorMiddleware)
);
