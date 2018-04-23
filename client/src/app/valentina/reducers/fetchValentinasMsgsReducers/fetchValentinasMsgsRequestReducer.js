import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function fetchValentinasMsgsRequestReducer(fetchValentinasMsgsState, payload) {
  // sets isFetching: true,didInvalidate: false
  const newFetchValentinasMsgsState = update(fetchValentinasMsgsState, { $merge: payload });
  return newFetchValentinasMsgsState;
}
