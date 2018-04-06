import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchIbisokozoSuccessReducer(fetchIbisokozoState, payload) {
  // sets isFetching: false, ibisokozo: to received array
  const newFetchIbisokozoState = update(fetchIbisokozoState, { $merge: payload });
  return newFetchIbisokozoState;
}
