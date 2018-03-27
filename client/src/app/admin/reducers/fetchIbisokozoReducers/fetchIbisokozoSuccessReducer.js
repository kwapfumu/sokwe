import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export function fetchIbisokozoSuccessReducer(fetchIbisokozoState, action) {
	//sets isFetching: false, ibisokozo: to received array
	let newFetchIbisokozoState = update(fetchIbisokozoState,{$merge:{action.payload}});
	return newFetchIbisokozoState;
};
