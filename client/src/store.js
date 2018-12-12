import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { postsReducer } from './reducers/posts';
import authReducer from './reducers/auth';
import authMiddleware from './middleware/auth';

export default createStore(
  combineReducers({
    auth: authReducer,
    posts: postsReducer,
    form: formReducer
  }),
  applyMiddleware(thunk, authMiddleware)
);
