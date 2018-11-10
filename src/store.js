import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer } from './reducers';

export default createStore(
  combineReducers({
    reddit: reducer,
    form: formReducer
  })
);
