// eslint-disable-next-line
require('es6-promise').polyfill();
// eslint-disable-next-line import/first
import fetch from 'isomorphic-fetch';
// eslint-disable-next-line import/first
import { GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER__ERROR } from '../../../constants/constants';
// eslint-disable-next-line import/first
import { API_URL } from '../../../constants/ApiConstants';
// eslint-disable-next-line import/first
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
    return fetch(`${API_URL}/:${anEmail}`, { headers: { Accept: 'application/json' } })
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
