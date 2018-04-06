import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addIgisokozoSuccessReducer(ibisokozoState, payload) {
  // sets isSaving: false, ibisokozo: to received array
  const newIbisokozoState = update(ibisokozoState, { $merge: payload });
  return newIbisokozoState;
}
