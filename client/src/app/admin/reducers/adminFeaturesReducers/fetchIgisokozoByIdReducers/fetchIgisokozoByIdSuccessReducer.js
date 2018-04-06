import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchIgisokozoByIdSuccessReducer(fetchIgisokozoByIdState, payload) {
  // sets isFetching: false, ibisokozo: to received array
  const newFetchIgisokozoByIdState = update(fetchIgisokozoByIdState, { $merge: payload });
  return newFetchIgisokozoByIdState;
}
