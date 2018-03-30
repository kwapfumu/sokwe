import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function deleteIgisokozoSuccessReducer(ibisokozoState, action) {
	let newIbisokozoState = update(ibisokozoState,{$merge:{action.payload}});
	return newIbisokozoState;
};