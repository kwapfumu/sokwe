import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import { API_URL, API_HEADERS } from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';
import incrementUserIbisokozoAdded from '../currentUserActionsCreators/incrementUserIbisokozoAddedActionsCreators';
import incrementUserScore from '../currentUserActionsCreators/incrementUserScoreActionsCreators';

const addIgisokozoRequestActionCreator = function addIgisokozoRequestActionCreator() {
  return {
    type: types.ADD_IGISOKOZO_REQUEST,
    payload: {
      isSaving: true,
    },
  };
};

const addedIgisokozoActionCreator = function addedIgisokozoActionCreator(json) {
  return {
    type: types.ADD_IGISOKOZO_SUCCESS,
    payload: {
      isSaving: false,
      lastAddedSokozo: json,
    },
  };
};

const addIgisokozoFailedActionCreator = function addIgisokozoFailedActionCreator() {
  return {
    type: types.ADD_IGISOKOZO_ERROR,
    payload: {
      isSaving: false,
    },
  };
};

const addIgisokozo = function addIgisokozo(aSokozo2Add) {
  // returns a function (that accepts `dispatch` so we can dispatch later) instead of an action
  return (dispatch) => {
    dispatch(addIgisokozoRequestActionCreator());
    return fetch(`${API_URL}/isokoranye/newSokozo`, {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(aSokozo2Add),
    })
      .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => {
        dispatch(addedIgisokozoActionCreator(json));
        dispatch(incrementUserIbisokozoAdded());
        dispatch(incrementUserScore());
      })
      .catch((error) => {
        dispatch(addIgisokozoFailedActionCreator());
        // eslint-disable-next-line no-console
        console.log('Error fetching data', error);
      });
  };
};

export default addIgisokozo;
