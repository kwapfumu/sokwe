import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function deleteIgisokozoRequestReducer(ibisokozoState, payload) {
  const newIbisokozoState = update(ibisokozoState, { $merge: payload });
  return newIbisokozoState;
}
