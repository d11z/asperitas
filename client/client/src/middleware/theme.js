import { TOGGLE_DARK_THEME } from '../actions/theme';

export default () => next => action => {
  if (action.type === TOGGLE_DARK_THEME) {
    const dark = localStorage.getItem('dark') === 'true';
    localStorage.setItem('dark', (!dark).toString());
  }
  next(action);
};
