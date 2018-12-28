import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_ERROR
} from '../actions/posts';

const initialState = { isFetching: false, items: [] };

const updateItems = (post, items) =>
  items.map(i => (i.id === post.id ? post : i));

let items;
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, isFetching: true, post: null, newPost: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, isFetching: false, items: action.posts };
    case FETCH_POSTS_ERROR:
      return { ...state, isFetching: false, error: action.error };

    case FETCH_POST_REQUEST:
      return { ...state, isFetching: true, newPost: null };
    case FETCH_POST_SUCCESS:
      return { ...state, isFetching: false, error: null, post: action.post };
    case FETCH_POST_ERROR:
      return { ...state, isFetching: false, error: action.error };

    case CREATE_POST_REQUEST:
      return { ...state, isFetching: true };
    case CREATE_POST_SUCCESS:
      return { ...state, isFetching: false, error: null, newPost: action.post };
    case CREATE_POST_ERROR:
      return { ...state, isFetching: false, error: action.error };

    case CREATE_COMMENT_REQUEST:
      return { ...state, isCommenting: true };
    case CREATE_COMMENT_SUCCESS:
      return { ...state, isCommenting: false, error: null, post: action.post };
    case CREATE_COMMENT_ERROR:
      return { ...state, isCommenting: false, error: action.error };

    case VOTE_REQUEST:
      return { ...state, isVoting: true };
    case VOTE_SUCCESS:
      items = updateItems(action.post, state.items);
      return {
        ...state,
        isVoting: false,
        error: null,
        items,
        post: action.post
      };
    case VOTE_ERROR:
      return { ...state, isVoting: false, error: action.error };

    default:
      return state;
  }
};
