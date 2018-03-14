"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

function getIgisokozoActionsCreators(){
	return{
		requestIgisokozo: function requestIgisokozo(){
			return {
				type:types.GET_IGISOKOZO,
				payload:{
					isLoading:true
				}
			};
		},
		receivedIgisokozo: function receivedIgisokozo(json){
			return {
				type:types.GET_IGISOKOZO_SUCCESS,
				payload:{
					isLoading:false
					aSokozo:json
				}
			};
		},
		getIgisokozoFailed: function getIgisokozoFailed(){
			return {
				type:types.GET_IGISOKOZO_ERROR,
				payload:{
					isLoading:false					
				}
			};
		},		
		getIgisokozo: function getIgisokozo(){
			//returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
			return (dispatch) => { 
				dispatch(this.requestIgisokozo());
				return fetch(`${api.API_URL}/isokoranye/niruze`, {headers:api.API_HEADERS})
						.then(fetchResponseHandlerFctr.checkHttpErrorStatus(response))
						.then((response) => response.json())
						.then((json) => dispatch(this.receivedIgisokozo(json)))
						.catch((error) => {
							dispatch(this.getIgisokozoFailed());
							console.log('Error fetching data', error);
						});	
			};
		};
	};
};
export default getIgisokozoActionsCreators;