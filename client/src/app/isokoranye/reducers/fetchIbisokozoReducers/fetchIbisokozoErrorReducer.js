import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchIbisokozoErrorReducer(fetchIbisokozoState, payload) {
  // sets isFetching: false
  const newFetchIbisokozoState = update(fetchIbisokozoState, { $merge: payload });
  return newFetchIbisokozoState;
}
