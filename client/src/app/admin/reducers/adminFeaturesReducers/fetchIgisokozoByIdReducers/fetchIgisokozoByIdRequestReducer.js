import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function fetchIgisokozoByIdRequestReducer(fetchIgisokozoByIdState, action) {
	// sets isFetching: true,didInvalidate: false
	let newFetchIgisokozoByIdState = update(fetchIgisokozoByIdState, { $merge: { action.payload } });
	return newFetchIgisokozoByIdState;
};
