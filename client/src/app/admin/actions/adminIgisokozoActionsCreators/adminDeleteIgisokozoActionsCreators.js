import fetch from 'isomorphic-fetch';
import { DELETE_IGISOKOZO_REQUEST, DELETE_IGISOKOZO_SUCCESS, DELETE_IGISOKOZO_ERROR } from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const adminDeleteIgisokozoActionsCreators = function adminDeleteIgisokozoActionsCreators() {
  return {
    // ActionCreators are functions that create actions
    deleteIgisokozoRequestActionCreator: function deleteIgisokozoRequestActionCreator() {
      return {
        type: DELETE_IGISOKOZO_REQUEST,
        payload: {
          isDeleting: true,
        },
      };
    },
    // ActionCreators are functions that create actions
    deletedIgisokozoActionCreator: function deletedIgisokozoActionCreator(json) {
      return {
        type: DELETE_IGISOKOZO_SUCCESS,
        payload: {
          isDeleting: false,
          lastDeletedSokozo: json,
        },
      };
    },
    deleteIgisokozoFailedActionCreator: function deleteIgisokozoFailedActionCreator(anError) {
      return {
        type: DELETE_IGISOKOZO_ERROR,
        payload: {
          isDeleting: false,
          deletingError: anError,
        },
      };
    },
    deleteIgisokozoActionsCreator: function deleteIgisokozoActionsCreator(aSokozoId) {
      return (dispatch) => {
        dispatch(this.deleteIgisokozoRequestActionCreator());
        return fetch(`${api.API_URL}/admin/ibisokozo/:${aSokozoId}/delete`, {
          method: 'DELETE',
          headers: api.API_HEADERS,
        }).then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => dispatch(this.deletedIgisokozoActionCreator(json)))
          .catch((error) => {
            dispatch(this.deleteIgisokozoFailedActionCreator(error));
            // eslint-disable-next-line no-console
            console.log('Error deleting a sokozo', error);
          });
      };
    },
  };
};

export default adminDeleteIgisokozoActionsCreators;
