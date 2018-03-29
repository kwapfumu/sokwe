import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

// ActionCreators are functions that create actions
const adminDeleteUserActionsCreators = function adminDeleteUserActionsCreators() {
  return {
    deleteUserRequestActionCreator: function deleteUserRequestActionCreator(aUserId) {
      return {
        type: types.DELETE_USER,
        payload: {
          aUserId2Delete: aUserId,
          isSaving: true,
        },
      };
    },
    deletedUserActionCreator: function deletedUserActionCreator() {
      return {
        type: types.DELETE_USER_SUCCESS,
        payload: {
          isSaving: false,
        },
      };
    },
    deleteUserFailedActionCreator: function deleteUserFailedActionCreator() {
      return {
        type: types.DELETE_USER_ERROR,
        payload: {
          aUserId2Delete: 0,
          isSaving: false,
        },
      };
    },
    deleteUser: function deleteUser(aUserId) {
      return (dispatch) => {
        dispatch(this.deleteUserRequestActionCreator(aUserId));
        return fetch(`${api.API_URL}/admin/users/:${aUserId}/deleteUser`, {
          method: 'DELETE',
          headers: api.API_HEADERS,
        }).then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => {
            dispatch(this.deletedUserActionCreator());
            // eslint-disable-next-line no-console
            console.log(`deleted user with _id ${json}`);
          })
          .catch((error) => {
            dispatch(this.deleteUserFailedActionCreator());
            // eslint-disable-next-line no-console
            console.log('Error deleting User', error);
          });
      };
    },
  };
};

export default adminDeleteUserActionsCreators;
