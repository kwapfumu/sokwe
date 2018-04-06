import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function deleteIgisokozoErrorReducer(ibisokozoState, payload) {
  // sets isFetching: false,didInvalidate:true
  const newIbisokozoState = update(ibisokozoState, { $merge: payload });
  return newIbisokozoState;
}
