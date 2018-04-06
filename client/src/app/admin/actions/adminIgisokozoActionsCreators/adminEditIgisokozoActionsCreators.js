import fetch from 'isomorphic-fetch';
import { UPDATE_IGISOKOZO_REQUEST, UPDATE_IGISOKOZO_SUCCESS, UPDATE_IGISOKOZO_ERROR } from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const adminEditIgisokozoActionsCreators = function adminEditIgisokozoActionsCreators() {
  return {
    editIgisokozoRequestActionCreator: function editIgisokozoRequestActionCreator() {
      return {
        type: UPDATE_IGISOKOZO_REQUEST,
        payload: {
          isUpdating: true,
        },
      };
    },
    editedIgisokozoActionCreator: function editedIgisokozoRequestActionCreator() {
      return {
        type: UPDATE_IGISOKOZO_SUCCESS,
        payload: {
          isUpdating: false,
        },
      };
    },
    editIgisokozoFailedActionCreator: function editIgisokozoFailedActionCreator() {
      return {
        type: UPDATE_IGISOKOZO_ERROR,
        payload: {
          isUpdating: false,
        },
      };
    },
    editIgisokozo: function editIgisokozo(sokozoId, editedSokozo) {
      // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
      return (dispatch) => {
        dispatch(this.editIgisokozoRequestActionCreator());
        return fetch(`${api.API_URL}/admin/ibisokozo/:${sokozoId}/edit`, {
          method: 'POST',
          headers: api.API_HEADERS,
          body: JSON.stringify(editedSokozo),
        }).then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
          .then((response) => response.json())
          .then((json) => dispatch(this.editedIgisokozoActionCreator(json)))
          .catch((error) => {
            dispatch(this.editIgisokozoFailedActionCreator());
            // eslint-disable-next-line no-console
            console.log('Error editing a sokozo', error);
          });
      };
    },
  };
};

export default adminEditIgisokozoActionsCreators;
