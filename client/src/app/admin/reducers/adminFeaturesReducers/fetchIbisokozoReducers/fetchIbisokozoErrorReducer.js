import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchIbisokozoErrorReducer(fetchIbisokozoState, action) {
	// sets isFetching: false, didInvalidate:true
	const newFetchIbisokozoState = update(fetchIbisokozoState, { $merge: { action.payload } });
	return newFetchIbisokozoState;
}
