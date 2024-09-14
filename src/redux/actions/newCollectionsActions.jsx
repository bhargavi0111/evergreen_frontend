import axios from 'axios';

export const FETCH_NEW_COLLECTIONS_REQUEST = 'FETCH_NEW_COLLECTIONS_REQUEST';
export const FETCH_NEW_COLLECTIONS_SUCCESS = 'FETCH_NEW_COLLECTIONS_SUCCESS';
export const FETCH_NEW_COLLECTIONS_FAILURE = 'FETCH_NEW_COLLECTIONS_FAILURE';

export const fetchNewCollections = () => async (dispatch) => {
  dispatch({ type: FETCH_NEW_COLLECTIONS_REQUEST });
  try {
    const response = await axios.get('http://localhost:4000/newcollection');
    dispatch({ type: FETCH_NEW_COLLECTIONS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_NEW_COLLECTIONS_FAILURE, payload: error.message });
  }
};
