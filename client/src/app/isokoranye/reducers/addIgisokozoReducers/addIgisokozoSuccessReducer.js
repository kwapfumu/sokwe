import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addIgisokozoSuccessReducer(ibisokozoState, action) {
	//sets isSaving: false, ibisokozo: to received array
	const newIbisokozoState = update(ibisokozoState, { $merge: {action.payload} });
	return newIbisokozoState;
};
