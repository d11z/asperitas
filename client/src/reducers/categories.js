import {
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from '../actions/categories';

const initialState = { isFetching: false, items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, isFetching: true, items: [] };

    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, isFetching: false, items: action.categories };

    case FETCH_CATEGORIES_ERROR:
      return { ...state, isFetching: false };

    case FETCH_CATEGORY_REQUEST:
      return { ...state, isFetching: true, newCategory: null };

    case FETCH_CATEGORY_SUCCESS:
      return { ...state, isFetching: false, category: action.category };

    case FETCH_CATEGORY_ERROR:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}
