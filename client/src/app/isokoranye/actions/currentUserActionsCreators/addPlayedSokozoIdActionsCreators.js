import fetch from 'isomorphic-fetch';
import { ADD_PLAYEDSOKOZO_ID_REQUEST, ADD_PLAYEDSOKOZO_ID_SUCCESS, ADD_PLAYEDSOKOZO_ID_ERROR } from '../../../constants/constants';
import { API_URL, API_HEADERS } from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';


const requestAddPlayedSokozoId = function requestAddPlayedSokozoId() {
  return {
    type: ADD_PLAYEDSOKOZO_ID_REQUEST,
    payload: {
      isSaving: true,
    },
  };
};

const addedPlayedSokozoId = function addedPlayedSokozoId(json) {
  return {
    type: ADD_PLAYEDSOKOZO_ID_SUCCESS,
    payload: {
      isSaving: false,
      currentUser: json,
    },
  };
};

const addPlayedSokozoIdFailed = function addPlayedSokozoIdFailed() {
  return {
    type: ADD_PLAYEDSOKOZO_ID_ERROR,
    payload: {
      isSaving: false,
    },
  };
};

const addPlayedSokozoId = function addPlayedSokozoId(aPlayedSokozoId) {
  // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
  return (dispatch) => {
    dispatch(requestAddPlayedSokozoId());
    return fetch(`${API_URL}/isokoranye/addPlayedSokozoId`, {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(aPlayedSokozoId),
    })
      .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => dispatch(addedPlayedSokozoId(json)))
      .catch((error) => {
        dispatch(addPlayedSokozoIdFailed());
        // eslint-disable-next-line no-console
        console.log('Error adding played sokozo', error);
      });
  };
};

export default addPlayedSokozoId;
