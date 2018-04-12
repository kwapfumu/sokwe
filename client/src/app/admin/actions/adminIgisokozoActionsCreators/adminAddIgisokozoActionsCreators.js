import fetch from 'isomorphic-fetch';
import { ADD_IGISOKOZO_REQUEST, ADD_IGISOKOZO_SUCCESS, ADD_IGISOKOZO_ERROR } from '../../../constants/constants';
import { API_URL, API_HEADERS } from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const addIgisokozoRequestActionCreator = function addIgisokozoRequestActionCreator() {
  return {
    type: ADD_IGISOKOZO_REQUEST,
    payload: {
      isSaving: true,
    },
  };
};

const addedIgisokozoActionCreator = function addedIgisokozoActionCreator(json) {
  return {
    type: ADD_IGISOKOZO_SUCCESS,
    payload: {
      isSaving: false,
      // this might be in the wrong action creator re-think when not tired
      lastAddedSokozo: json,
    },
  };
};

const addIgisokozoFailedActionCreator = function addIgisokozoFailedActionCreator() {
  return {
    type: ADD_IGISOKOZO_ERROR,
    payload: {
      isSaving: false,
    },
  };
};

const addIgisokozo = function addIgisokozo(aSokozo2Add) {
  // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
  return (dispatch) => {
    dispatch(addIgisokozoRequestActionCreator());
    return fetch(`${API_URL}/admin/ibisokozo/newSokozo`, {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(aSokozo2Add),
    })
      .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => dispatch(addedIgisokozoActionCreator(json)))
      .catch((error) => {
        dispatch(addIgisokozoFailedActionCreator());
        // eslint-disable-next-line no-console
        console.log('Error adding a sokozo', error);
      });
  };
};

export default addIgisokozo;
