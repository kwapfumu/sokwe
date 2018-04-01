import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchIgisokozoByIdSuccessReducer(fetchIgisokozoByIdState, action) {
	//sets isFetching: false, ibisokozo: to received array
	let newFetchIgisokozoByIdState = update(fetchIgisokozoByIdState, { $merge: { action.payload } });
	return newFetchIgisokozoByIdState;
};
