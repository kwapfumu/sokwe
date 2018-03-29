import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const fetchUsersActionsCreators = function fetchUsersActionsCreators() {
  return {
    // ActionCreators are functions that create actions
    requestUsers: function requestUsers() {
      return {
        type: types.FETCH_USERS,
        payload: {
          isFetching: true,
          didInvalidate: false,
        },
      };
    },
    /** when the network request comes through, we will dispatch
    * FETCH_TASKS_SUCCESS */
    receivedUsers: function receivedUsers(json) {
      return {
        type: types.FETCH_USERS_SUCCESS,
        payload: {
          isFetching: false,
          ibisokozo: json.data.children.map((child) => child.data),
          // receivedAt: Date.now(),
        },
      };
    },
    fetchUsersFailed: function fetchUsersFailed() {
      return {
        type: types.FETCH_USERS_ERROR,
        payload: {
          isFetching: false,
          didInvalidate: true,
        },
      };
    },

    fetchIbisokozo: function fetchIbisokozo() {
      // returns a function(that accepts `dispatch` so we can dispatch later)
      // instead of an action
      return (dispatch) => {
        dispatch(this.requestUsers());
        return fetch(`${api.API_URL}/admin/users`, { headers: api.API_HEADERS })
          .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => dispatch(this.receivedUsers(json)))
          .catch((error) => {
            dispatch(this.fetchUsersFailed());
            // eslint-disable-next-line no-console
            console.log('Error fetching users', error);
          });
      };
    },
  };
};

export default fetchUsersActionsCreators;
