"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer
/**a reducer is a pure function. It only computes the next state. It should be completely predictable: calling 
it with the same inputs many times should produce the same outputs. It shouldn't perform any side effects like 
API calls or router transitions. These should happen before an action is dispatched.*/
export function incrementUserScoreSuccessReducer(currentUserState, action) {
	//sets isSaving: false and currentUser to the received one
	let newCurrentUserState = update(currentUserState,{$merge:action.payload});	
	return newCurrentUserState;	
};