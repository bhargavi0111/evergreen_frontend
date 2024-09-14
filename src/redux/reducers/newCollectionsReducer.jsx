import { FETCH_NEW_COLLECTIONS_REQUEST, FETCH_NEW_COLLECTIONS_SUCCESS, FETCH_NEW_COLLECTIONS_FAILURE } from '../actions/newCollectionsActions';

const initialState = {
  newCollections: [],
  loading: false,
  error: null,
};

const newCollectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_COLLECTIONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_NEW_COLLECTIONS_SUCCESS:
      return { ...state, loading: false, newCollections: action.payload };
    case FETCH_NEW_COLLECTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default newCollectionsReducer;
