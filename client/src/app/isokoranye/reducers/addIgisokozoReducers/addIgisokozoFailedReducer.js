import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function addIgisokozoFailedReducer(ibisokozoState, action) {
	// sets isSaving: false
	const newIbisokozoState = update(ibisokozoState, { $merge: {action.payload} });
	return newIbisokozoState;
}
