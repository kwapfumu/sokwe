import fetch from 'isomorphic-fetch';
import { GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER__ERROR } from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const currentUserActionsCreators = function currentUserActionsCreators() {
  return {
    requestCurrentUser: function requestCurrentUser() {
      return {
        type: GET_CURRENT_USER,
        payload: {
          isFetching: true,
        },
      };
    },
    receivedCurrentUser: function receivedCurrentUser(json) {
      return {
        type: GET_CURRENT_USER_SUCCESS,
        payload: {
          isFetching: false,
          currentUser: json,
        },
      };
    },
    getCurrentUserFailed: function getCurrentUserFailed() {
      return {
        type: GET_CURRENT_USER__ERROR,
        payload: {
          isFetching: false,
        },
      };
    },
    getCurrentUser: function getCurrentUser() {
      // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
      return (dispatch) => {
        dispatch(this.requestCurrentUser());
        return fetch(`${api.API_URL}/:email`, { headers: api.API_HEADERS })
          .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => dispatch(this.receivedCurrentUser(json)))
          .catch((error) => {
            dispatch(this.getCurrentUserFailed());
            // eslint-disable-next-line no-console
            console.log('Error fetching current user', error);
          });
      };
    },
  };
};
export default currentUserActionsCreators;
