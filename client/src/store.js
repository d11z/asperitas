import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { postsReducer } from './reducers/posts';

export default createStore(
  combineReducers({
    posts: postsReducer,
    form: formReducer
  }),
  applyMiddleware(thunk)
);
