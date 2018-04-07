import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addIgisokozoSucessReducer(currentUserState, payload) {
  // sets isSaving: false
  const newCurrentUserState = update(currentUserState, { $merge: payload });
  return newCurrentUserState;
}
