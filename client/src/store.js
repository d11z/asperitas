import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import posts from './reducers/posts';
import auth from './reducers/auth';
import authMiddleware from './middleware/auth';

export default createStore(
  combineReducers({ auth, posts, form }),
  applyMiddleware(thunk, authMiddleware)
);
