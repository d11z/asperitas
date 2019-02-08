import { TOGGLE_DARK_THEME } from '../actions/theme';

const dark = localStorage.getItem('dark') === 'true';
const initialState = { dark };

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return { ...state, dark: !state.dark };
    default:
      return state;
  }
};
