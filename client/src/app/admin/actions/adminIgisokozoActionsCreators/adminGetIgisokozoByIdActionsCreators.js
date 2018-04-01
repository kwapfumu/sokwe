import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const adminGetIgisokozoByIdActionsCreators = function adminGetIgisokozoByIdActionsCreators() {
  return {
    requestIgisokozo: function requestIgisokozo() {
      return {
        type: types.GET_IGISOKOZO_BYID,
        payload: {
          isFetching: true,
        },
      };
    },
    receivedIgisokozo: function receivedIgisokozo(json) {
      return {
        type: types.GET_IGISOKOZO_BYID_SUCCESS,
        payload: {
          isFetching: false,
          aSokozo2Edit: json,
        },
      };
    },
    getIgisokozoFailed: function getIgisokozoFailed() {
      return {
        type: types.GET_IGISOKOZO_BYID_ERROR,
        payload: {
          isFetching: false,
        },
      };
    },
    getIgisokozo: function getIgisokozo(aSokozoId) {
      // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
      return (dispatch) => {
        dispatch(this.requestIgisokozo());
        return fetch(`${api.API_URL}/admin/ibisokozo/:${aSokozoId}`, { headers: api.API_HEADERS })
          .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => dispatch(this.receivedIgisokozo(json)))
          .catch((error) => {
            dispatch(this.getIgisokozoFailed());
            // eslint-disable-next-line no-console
            console.log('Error fetching a sokozo by id', error);
          });
      };
    },
  };
};
export default adminGetIgisokozoByIdActionsCreators;
