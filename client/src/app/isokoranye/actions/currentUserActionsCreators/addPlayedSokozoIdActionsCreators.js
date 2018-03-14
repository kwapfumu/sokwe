"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

function addPlayedSokozoIdActionsCreators(){
	return {
		requestAddPlayedSokozoId: function requestAddPlayedSokozoId(){
			return {
				type: types.ADD_PLAYEDSOKOZO_ID_REQUEST,
				payload:{
					isSaving:true
				}
			};
		},
		addedPlayedSokozoId: function addedPlayedSokozoId(json){
			return {
				type: types.ADD_PLAYEDSOKOZO_ID_SUCCESS,
				payload:{
					isSaving:false,
					currentUser:json
				}
			};
		},
		addPlayedSokozoIdFailed: function addPlayedSokozoIdFailed(){
			return {
				type: types.ADD_PLAYEDSOKOZO_ID_ERROR,
				payload:{
					isSaving:false,
				}
			};
		},
		addPlayedSokozoId: function addPlayedSokozoId(aPlayedSokozoId){
			//returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
			return (dispatch) => { 
				dispatch(this.requestAddPlayedSokozoId());
				return fetch(`${api.API_URL}/isokoranye/addPlayedSokozoId`, {
						method:'POST',
						headers:api.API_HEADERS,
						body: JSON.stringify(aPlayedSokozoId)})
						.then(fetchResponseHandlerFctr.checkHttpErrorStatus(response))
						.then((response) => response.json())
						.then((json) => dispatch(this.addedPlayedSokozoId(json)))
						.catch((error) => {
							dispatch(this.addPlayedSokozoIdFailed());
							console.log('Error fetching data', error);
						});	
			};
		};
	};
};

export default addPlayedSokozoIdActionsCreators;