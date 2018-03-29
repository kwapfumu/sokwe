import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function deleteIgisokozoRequestReducer(ibisokozoState, action) {
	let newIbisokozoState = update(ibisokozoState, { $merge: { action.payload } });
	return newIbisokozoState;
};
