"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../fetchResponseHandlerFctr';
/**ActionCreators are functions that create actions*/
/**Redux Thunk middleware allows you to write action creators that return a function instead of 
an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a 
certain condition is met. The inner function receives the store methods 'dispatch' and 'getState'
as parameters.*/

	
function updateUserActionCreator(aUserId){
	return {
		type: types.CREATE_USER,		
		payload: aUserId
	};
},

function updatedUserActionCreator(aUserId,savedEditedUser){
	return {
		type: types.CREATE_USER_SUCCESS,
		aUserId: aUserId,
		payload: savedEditedUser
	};
},
function updateUserFailedActionCreator(error){
	return {
		type: types.CREATE_USER_ERROR, 
		payload: error
	};
},

function editUserActionsCreator(aUserId, anEditedUser) {
	return (dispatch) => {
		return fetch(`${api.API_URL}/admin/users/:${aUserId}/edit`, {
			method: 'PUT',
			headers: api.API_HEADERS,
			body: JSON.stringify(anEditedUser)
		}).then(fetchResponseHandlerFctr.checkHttpErrorStatus)
		   .then((response) => response.json())
		   .then((json) => dispatch(this.updatedUserActionCreator(aUserId,json)))
		   .catch((error) => {
				dispatch(updateUserFailedActionCreator(error));
					console.log('Error editing user', error);
			});	
	};
};

export {editUserActionsCreator, updateUserActionCreator};