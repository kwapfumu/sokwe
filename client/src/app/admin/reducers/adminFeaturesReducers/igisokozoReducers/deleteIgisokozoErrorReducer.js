import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function deleteIgisokozoErrorReducer(ibisokozoState, action) {
	//sets isFetching: false,didInvalidate:true
	let newIbisokozoState = update(ibisokozoState,{$merge:{action.payload}});
	return newIbisokozoState;
}
