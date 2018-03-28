import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

/**ActionCreators are functions that create actions*/
function deletedTaskActionCreator(json){
	return {
		type: types.DELETE_TASK_SUCCESS,
		payload: json
	};
},
function deleteTaskFailedActionCreator(anError){
	return {
		type: types.DELETE_TASK_ERROR,
		payload: anError
	};
},
function deleteTaskActionsCreator(aTaskId) {
	return (dispatch) => {
		return fetch(`${api.API_URL}/admin/releaseBacklog/:${aTaskId}/deleteTask`, {
			method: 'DELETE',
			headers: api.API_HEADERS
		}).then(fetchResponseHandlerFctr.checkHttpErrorStatus)
		  .then((response) => response.json())
		  .then((json) => dispatch(deletedTaskActionCreator(json)))
		  .catch((error) => {
			dispatch(deleteTaskFailedActionCreator(error));
					console.log('Error deleting task', error);
		  });
	};

};
export {deleteTaskActionsCreator};
