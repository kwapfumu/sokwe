import fetch from 'isomorphic-fetch';
import * as api from '../../../constants/ApiConstants';
import deleteUserRequestActionCreator from './deleteUserRequestActionCreator';
import deletedUserActionCreator from './deletedUserActionCreator';
import deleteUserFailedActionCreator from './deleteUserFailedActionCreator';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

// ActionCreators are functions that create actions
export default function deleteUser(aUserId) {
  return (dispatch) => {
    dispatch(deleteUserRequestActionCreator(aUserId));
    return fetch(`${api.API_URL}/admin/users/:${aUserId}/deleteUser`, {
      method: 'DELETE',
      headers: api.API_HEADERS,
    }).then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => {
        dispatch(deletedUserActionCreator());
        // eslint-disable-next-line no-console
        console.log(`deleted user with _id ${json}`);
      })
      .catch((error) => {
        dispatch(deleteUserFailedActionCreator());
        // eslint-disable-next-line no-console
        console.log('Error deleting User', error);
      });
  };
}
