import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addIgisokozoSucessReducer(currentUserState, action) {
  // sets isSaving: false
  const newCurrentUserState = update(currentUserState, { $merge: action.payload });
  return newCurrentUserState;
}
