import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const adminEditIgisokozoActionsCreators = function adminEditIgisokozoActionsCreators() {
  return {
    editIgisokozoRequestActionCreator: function editIgisokozoRequestActionCreator() {
      return {
        type: types.UPDATE_IGISOKOZO_REQUEST,
        payload: {
          isSaving: false,
        },
      };
    },
    editedIgisokozoActionCreator: function editedIgisokozoRequestActionCreator() {
      return {
        type: types.UPDATE_IGISOKOZO_SUCCESS,
        payload: {
          isSaving: false,
        },
      };
    },
    editIgisokozoFailedActionCreator: function editIgisokozoFailedActionCreator() {
      return {
        type: types.UPDATE_IGISOKOZO_ERROR,
        payload: {
          isSaving: false,
        },
      };
    },
    editIgisokozo: function editIgisokozo(sokozoId, aSokozo2Edit) {
      // returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
      return (dispatch) => {
        dispatch(this.editIgisokozoRequestActionCreator());
        return fetch(`${api.API_URL}/admin/ibisokozo/:${sokozoId}/edit`, {
          method: 'POST',
          headers: api.API_HEADERS,
          body: JSON.stringify(aSokozo2Edit),
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
