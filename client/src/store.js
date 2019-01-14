import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import auth from './reducers/auth';
import posts from './reducers/posts';
import authMiddleware from './middleware/auth';

export default createStore(
  combineReducers({ form, auth, posts }),
  applyMiddleware(thunk, authMiddleware)
);
