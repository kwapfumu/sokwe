import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function addIgisokozoRequestReducer(ibisokozoState, action) {
  // sets isSaving: true
  const newIbisokozoState = update(ibisokozoState, { $merge: { action.payload } });
  return newIbisokozoState;
}
