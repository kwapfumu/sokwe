"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

export default function incrementUserIbisokozoAddedActionsCreators(){
	return{
		requestIncrementUserIbisokozoAdded: function requestIncrementUserIbisokozoAdded(){
			return {
				type: types.INCREMENT_USER_IBISOKOZOADDED_REQUEST,
				payload:{
					isSaving:true
				}
			};
		},
		incrementedUserIbisokozoAdded: function incrementedUserIbisokozoAdded(json){
			return {
				type: types.INCREMENT_USER_IBISOKOZOADDED_SUCCESS,
				payload:{
					isSaving:false,
					currentUser:json
				}
			};
		},
		incrementUserIbisokozoAddedFailed: function incrementUserIbisokozoAddedFailed(){
			return {
				type: types.INCREMENT_USER_IBISOKOZOADDED_ERROR,
				payload:{
					isSaving:false,
				}
			};
		},
		incrementUserIbisokozoAdded: function incrementUserIbisokozoAdded(){
			//returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
			return (dispatch) => { 
				dispatch(this.requestIncrementUserIbisokozoAdded());
				return fetch(`${api.API_URL}/isokoranye/incrementUserIbisokozAdded`, {headers:api.API_HEADERS})
						.then(fetchResponseHandlerFctr.checkHttpErrorStatus(response))
						.then((response) => response.json())
						.then((json) => dispatch(this.incrementedUserIbisokozoAdded(json)))
						.catch((error) => {
							dispatch(this.incrementUserIbisokozoAddedFailed());
							console.log('Error fetching data', error);
						});	
			};
		}
	};	
};