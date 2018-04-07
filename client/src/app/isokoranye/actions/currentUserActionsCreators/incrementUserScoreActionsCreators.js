import fetch from 'isomorphic-fetch';
import { INCREMENT_USER_SCORE_REQUEST, INCREMENT_USER_SCORE_SUCCESS, INCREMENT_USER_SCORE_ERROR } from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const incrementUserScoreActionsCreators = function incrementUserScoreActionsCreators() {
  return {
    requestIncrementUserScore: function requestIncrementUserScore() {
      return {
        type: INCREMENT_USER_SCORE_REQUEST,
        payload: {
          isSaving: true,
        },
      };
    },
    incrementedUserScore: function incrementedUserScore(json) {
      return {
        type: INCREMENT_USER_SCORE_SUCCESS,
        payload: {
          isSaving: false,
          currentUser: json,
        },
      };
    },
    incrementUserScoreFailed: function incrementUserScoreFailed() {
      return {
        type: INCREMENT_USER_SCORE_ERROR,
        payload: {
          isSaving: false,
        },
      };
    },
    incrementUserScore: function incrementUserScore() {
      // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
      return (dispatch) => {
        dispatch(this.requestIncrementUserScore());
        return fetch(`${api.API_URL}/isokoranye/addScore`, { headers: api.API_HEADERS })
          .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => dispatch(this.incrementedUserScore(json)))
          .catch((error) => {
            dispatch(this.incrementUserScoreFailed());
            // eslint-disable-next-line no-console
            console.log('Error fetching data', error);
          });
      };
    },
  };
};

export default incrementUserScoreActionsCreators;
