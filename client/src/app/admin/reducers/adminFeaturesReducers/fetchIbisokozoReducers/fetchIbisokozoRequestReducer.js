import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export function fetchIbisokozoRequestReducer(fetchIbisokozoState, action) {
	// sets isFetching: true,didInvalidate: false
	let newFetchIbisokozoState = update(fetchIbisokozoState, { $merge: { action.payload } });
	return newFetchIbisokozoState;
};
