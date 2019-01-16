import { createBrowserHistory } from 'history';
import store from '../store';
import { hideError } from '../actions/error';

const history = createBrowserHistory();

history.listen(() => {
  store.dispatch(hideError());
});

export default history;
