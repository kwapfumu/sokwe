"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import addTempId2newObject from '../../coolReusableFunctions/addTempId2newUser';
import fetchResponseHandlerFctr from '../../../fetchResponseHandlerFctr';


/**ActionCreators are functions that create actions*/
function createUserActionCreator(aUser2Add){
	return {
		type: types.CREATE_USER, 
		payload: aUser2Add 
	};
};

/**when the network request comes through, we will dispatch CREATE_USER_SUCCESS*/
function createdUserActionCreator(json) {
	return { 
		type: types.CREATE_USER_SUCCESS, 
		payload: json.data.children.map((child) => child.data)
		//receivedAt: Date.now()
	};
};

function createUserFailedActionCreator(anError) {
	return { 
		type: types.CREATE_USER_ERROR, 
		payload: anError 
	};
};

function addUserActionsCreator(aUser2Add) {
	let newUser = addTempId2newObject.addTempId(aUser2Add);
	//returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
	return (dispatch) => { 
		dispatch(this.createUserActionCreator(newUser));
		return fetch(`${api.API_URL}/admin/users/newUser`, {
			method: 'POST',
			headers: api.API_HEADERS,
			body: JSON.stringify(aUser2Add)
			}).then(fetchResponseHandlerFctr.checkHttpErrorStatus)
			  .then((response) => response.json())
			  .then((json) => dispatch(this.createdUserActionCreator(json)))
			  .catch((error) => {
				dispatch(this.createUserFailedActionCreator(error));
				console.log('Error fetching users', error);
			  });	
	};
};


export {addUserActionsCreator};