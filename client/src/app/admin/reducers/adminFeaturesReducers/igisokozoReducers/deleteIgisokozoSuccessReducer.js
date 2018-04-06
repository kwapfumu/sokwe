import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function deleteIgisokozoSuccessReducer(ibisokozoState, payload) {
  const newIbisokozoState = update(ibisokozoState, { $merge: payload });
  return newIbisokozoState;
}
