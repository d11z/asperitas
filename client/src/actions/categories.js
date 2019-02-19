import { getCategories } from '../util/api';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';

const fetchCategoriesRequest = { type: FETCH_CATEGORIES_REQUEST };
const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
});
const fetchCategoriesError = error => ({ type: FETCH_CATEGORIES_ERROR, error });

export const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesRequest);
  try {
    console.log('fetching categories');
    const categories = await getCategories();
    console.log('fetched categories', categories);
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

export const fetchCategoriesByUsername = username => async dispatch => {
  dispatch(fetchCategoriesRequest);
  try {
    const categories = [];
    console.log('fetch categories by username', username);
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR';

const fetchCategoryRequest = { type: FETCH_CATEGORY_REQUEST };
const fetchCategorySuccess = categories => ({
  type: FETCH_CATEGORY_SUCCESS,
  categories
});
const fetchCategoryError = error => ({ type: FETCH_CATEGORY_ERROR, error });

export const fetchCategory = title => async dispatch => {
  dispatch(fetchCategoryRequest);
  try {
    const category = {};
    console.log('fetch category', title);
    dispatch(fetchCategorySuccess(category));
  } catch (error) {
    dispatch(fetchCategoryError(error));
  }
};
