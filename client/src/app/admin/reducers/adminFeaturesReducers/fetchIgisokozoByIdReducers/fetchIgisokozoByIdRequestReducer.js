import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function fetchIgisokozoByIdRequestReducer(fetchIgisokozoByIdState, payload) {
  // sets isFetching: true,didInvalidate: false
  const newFetchIgisokozoByIdState = update(fetchIgisokozoByIdState, { $merge: payload });
  return newFetchIgisokozoByIdState;
}
