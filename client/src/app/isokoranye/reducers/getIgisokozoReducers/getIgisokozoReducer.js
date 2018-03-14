"use strict";
import {getIgisokozoRequestReducer} from './getIgisokozoRequestReducer';
import {getIgisokozoSuccessReducer} from './getIgisokozoSuccessReducer';
import {getIgisokozoErrorReducer} from './getIgisokozoErrorReducer';

/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/
/**a reducer is a pure function. It only computes the next state. It should be completely predictable: 
calling it with the same inputs many times should produce the same outputs. It shouldn't perform any 
side effects like API calls or router transitions. These should happen before an action is dispatched.*/
export function getIgisokozoReducer(getIgisokozoState = {
	isLoading: false,	
	aSokozo: {}
	}, action) {
	switch(action.type) {
		case 'GET_IGISOKOZO': return getIgisokozoRequestReducer(getIgisokozoState, action);
		case 'GET_IGISOKOZO_SUCCESS': return getIgisokozoSuccessReducer(getIgisokozoState, action);
		case 'GET_IGISOKOZO_ERROR': return getIgisokozoErrorReducer(getIgisokozoState, action);
		default : return getIgisokozoState;
	},
};