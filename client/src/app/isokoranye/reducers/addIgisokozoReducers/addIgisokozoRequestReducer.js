import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function addIgisokozoRequestReducer(ibisokozoState, payload) {
  // sets isSaving: true
  const newIbisokozoState = update(ibisokozoState, { $merge: payload });
  return newIbisokozoState;
}
