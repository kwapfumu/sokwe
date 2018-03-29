import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const adminDeleteIgisokozoActionsCreators = function adminDeleteIgisokozoActionsCreators() {
  return {
    // ActionCreators are functions that create actions
    deletedIgisokozoActionCreator: function deletedIgisokozoActionCreator(json) {
      return {
        type: types.DELETE_IGISOKOZO_SUCCESS,
        payload: json,
      };
    },
    deleteIgisokozoFailedActionCreator: function deleteIgisokozoFailedActionCreator(anError) {
      return {
        type: types.DELETE_IGISOKOZO_ERROR,
        payload: anError,
      };
    },
    deleteIgisokozoActionsCreator: function deleteIgisokozoActionsCreator(aSokozoId) {
      return (dispatch) => {
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
