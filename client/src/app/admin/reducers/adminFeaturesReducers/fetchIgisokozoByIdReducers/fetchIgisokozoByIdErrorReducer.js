import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchIgisokozoByIdErrorReducer(fetchIgisokozoByIdState, action) {
	//sets isFetching: false, didInvalidate:true
	const newFetchIgisokozoByIdState = update(fetchIgisokozoByIdState, { $merge: { action.payload } });
	return newFetchIgisokozoByIdState;
}
