import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function addIgisokozoFailedReducer(ibisokozoState, payload) {
  // sets isSaving: false
  const newIbisokozoState = update(ibisokozoState, { $merge: payload });
  return newIbisokozoState;
}
