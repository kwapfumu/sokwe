import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchIgisokozoByIdErrorReducer(fetchIgisokozoByIdState, payload) {
  // sets isFetching: false
  const newFetchIgisokozoByIdState = update(fetchIgisokozoByIdState, { $merge: payload });
  return newFetchIgisokozoByIdState;
}
