"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

function currentUserActionsCreators(){
	return{
		requestCurrentUser: function requestCurrentUser(){
			return{
				type:types.GET_CURRENT_USER,
				payload:{ 
					isFetching:true
				}
			};
		},
		receivedCurrentUser: function receivedCurrentUser(json){
			return{
				type:types.GET_CURRENT_USER_SUCCESS,
				payload:{ 
					isFetching:false,
					currentUser:json
				}
			};
		},
		getCurrentUserFailed: function getCurrentUserFailed(){
			return{
				type:types.GET_CURRENT_USER__ERROR,
				payload:{ 
					isFetching:false
				}
			};
		},
		getCurrentUser:function getCurrentUser(){
			//returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
			return (dispatch) => { 
				dispatch(this.requestCurrentUser());
				return fetch(`${api.API_URL}/isokoranye`, {headers:api.API_HEADERS})
						.then(fetchResponseHandlerFctr.checkHttpErrorStatus(response))
						.then((response) => response.json())
						.then((json) => dispatch(this.receivedCurrentUser(json)))
						.catch((error) => {
							dispatch(this.getCurrentUserFailed());
							console.log('Error fetching data', error);
						});	
			};
		};
	};
};
export default currentUserActionsCreators;



