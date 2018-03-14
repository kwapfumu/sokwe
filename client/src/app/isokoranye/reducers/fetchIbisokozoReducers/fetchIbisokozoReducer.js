"use strict";
import {fetchIbisokozoRequestReducer} from './fetchIbisokozoRequestReducer';
import {fetchIbisokozoSuccessReducer} from './fetchIbisokozoSuccessReducer';
import {fetchIbisokozoErrorReducer} from './fetchIbisokozoErrorReducer';

/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/
/**a reducer is a pure function. It only computes the next state. It should be completely predictable: 
calling it with the same inputs many times should produce the same outputs. It shouldn't perform any 
side effects like API calls or router transitions. These should happen before an action is dispatched.*/
export function fetchIbisokozoReducer(fetchIbisokozoState = {
	isFetching: false,
	didInvalidate: false,
	ibisokozo: []
	}, action) {
	switch(action.type) {
		case 'FETCH_IBISOKOZO': return fetchIbisokozoRequestReducer(fetchIbisokozoState, action);
		case 'FETCH_IBISOKOZO_SUCCESS': return fetchIbisokozoSuccessReducer(fetchIbisokozoState, action);
		case 'FETCH_IBISOKOZO_ERROR': return fetchIbisokozoErrorReducer(fetchIbisokozoState, action);
		default : return fetchIbisokozoState;
	},
};