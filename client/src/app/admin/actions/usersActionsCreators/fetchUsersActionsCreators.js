import fetch from 'isomorphic-fetch';
import requestUsers from './requestUsers';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';
import receivedUsers from './receivedUsers';
import fetchUsersFailed from './fetchUsersFailed';

export default function fetchUsers() {
  // returns a function(that accepts `dispatch` so we can dispatch later)
  // instead of an action
  return (dispatch) => {
    dispatch(requestUsers());
    return fetch(`${api.API_URL}/admin/users`, { headers: api.API_HEADERS })
      .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => dispatch(receivedUsers(json)))
      .catch((error) => {
        dispatch(fetchUsersFailed());
        // eslint-disable-next-line no-console
        console.log('Error fetching users', error);
      });
  };
}
