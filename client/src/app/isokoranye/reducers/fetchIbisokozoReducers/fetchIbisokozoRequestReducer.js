import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function fetchIbisokozoRequestReducer(fetchIbisokozoState, payload) {
  // sets isFetching: true,didInvalidate: false
  const newFetchIbisokozoState = update(fetchIbisokozoState, { $merge: payload });
  return newFetchIbisokozoState;
}
