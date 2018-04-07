import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function incrementUserScoreSuccessReducer(currentUserState, payload) {
  // sets isSaving: false and currentUser to the received one
  const newCurrentUserState = update(currentUserState, { $merge: payload });
  return newCurrentUserState;
}
