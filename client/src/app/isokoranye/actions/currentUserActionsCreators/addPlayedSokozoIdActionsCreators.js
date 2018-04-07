import fetch from 'isomorphic-fetch';
import { ADD_PLAYEDSOKOZO_ID_REQUEST, ADD_PLAYEDSOKOZO_ID_SUCCESS, ADD_PLAYEDSOKOZO_ID_ERROR } from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const addPlayedSokozoIdActionsCreators = function addPlayedSokozoIdActionsCreators() {
  return {
    requestAddPlayedSokozoId: function requestAddPlayedSokozoId() {
      return {
        type: ADD_PLAYEDSOKOZO_ID_REQUEST,
        payload: {
          isSaving: true,
        },
      };
    },
    addedPlayedSokozoId: function addedPlayedSokozoId(json) {
      return {
        type: ADD_PLAYEDSOKOZO_ID_SUCCESS,
        payload: {
          isSaving: false,
          currentUser: json,
        },
      };
    },
    addPlayedSokozoIdFailed: function addPlayedSokozoIdFailed() {
      return {
        type: ADD_PLAYEDSOKOZO_ID_ERROR,
        payload: {
          isSaving: false,
        },
      };
    },
    addPlayedSokozoId: function addPlayedSokozoId(aPlayedSokozoId) {
      // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
      return (dispatch) => {
        dispatch(this.requestAddPlayedSokozoId());
        return fetch(`${api.API_URL}/:username/isokoranye/addPlayedSokozoId`, {
          method: 'POST',
          headers: api.API_HEADERS,
          body: JSON.stringify(aPlayedSokozoId),
        })
          .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => dispatch(this.addedPlayedSokozoId(json)))
          .catch((error) => {
            dispatch(this.addPlayedSokozoIdFailed());
            // eslint-disable-next-line no-console
            console.log('Error adding played sokozo', error);
          });
      };
    },
  };
};

export default addPlayedSokozoIdActionsCreators;
