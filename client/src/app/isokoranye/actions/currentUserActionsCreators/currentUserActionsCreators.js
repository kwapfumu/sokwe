import fetch from 'isomorphic-fetch';
import { GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER__ERROR } from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const requestCurrentUser = function requestCurrentUser() {
  return {
    type: GET_CURRENT_USER,
    payload: {
      isFetching: true,
    },
  };
};
const receivedCurrentUser = function receivedCurrentUser(json) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    payload: {
      isFetching: false,
      currentUser: json,
    },
  };
};
const getCurrentUserFailed = function getCurrentUserFailed() {
  return {
    type: GET_CURRENT_USER__ERROR,
    payload: {
      isFetching: false,
    },
  };
};
const getCurrentUser = function getCurrentUser(anEmail) {
  // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
  return (dispatch) => {
    dispatch(requestCurrentUser());
    return fetch(`${api.API_URL}/:${anEmail}`, { headers: api.API_HEADERS })
      .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => dispatch(receivedCurrentUser(json)))
      .catch((error) => {
        dispatch(getCurrentUserFailed());
        // eslint-disable-next-line no-console
        console.log('Error fetching current user', error);
      });
  };
};


export default getCurrentUser;
