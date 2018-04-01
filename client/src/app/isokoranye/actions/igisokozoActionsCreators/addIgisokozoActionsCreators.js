import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';
import incrementUserIbisokozoAddedActionsCreators from '../currentUserActionsCreators/incrementUserIbisokozoAddedActionsCreators';
import incrementUserScoreActionsCreators from '../currentUserActionsCreators/incrementUserScoreActionsCreators';

const addIgisokozoActionsCreators = function addIgisokozoActionsCreators() {
  return {
    addIgisokozoRequestActionCreator: function addIgisokozoRequestActionCreator() {
      return {
        type: types.ADD_IGISOKOZO_REQUEST,
        payload: {
          isSaving: true,
        },
      };
    },
    addedIgisokozoActionCreator: function addedIgisokozoActionCreator(json) {
      return {
        type: types.ADD_IGISOKOZO_SUCCESS,
        payload: {
          isSaving: false,
          lastAddedSokozo: json,
        },
      };
    },
    addIgisokozoFailedActionCreator: function addIgisokozoFailedActionCreator() {
      return {
        type: types.ADD_IGISOKOZO_ERROR,
        payload: {
          isSaving: false,
        },
      };
    },
    addIgisokozo: function addIgisokozo(aSokozo2Add) {
      // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
      return (dispatch) => {
        dispatch(this.addIgisokozoRequestActionCreator());
        return fetch(`${api.API_URL}/isokoranye/newSokozo`, {
          method: 'POST',
          headers: api.API_HEADERS,
          body: JSON.stringify(aSokozo2Add),
        }).then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => {
            dispatch(this.addedIgisokozoActionCreator(json));
            dispatch(incrementUserIbisokozoAddedActionsCreators.incrementUserIbisokozoAdded());
            dispatch(incrementUserScoreActionsCreators.incrementUserScore());
          })
          .catch((error) => {
            dispatch(this.addIgisokozoFailedActionCreator());
            // eslint-disable-next-line no-console
            console.log('Error fetching data', error);
          });
      };
    },
  };
};

export default addIgisokozoActionsCreators;
