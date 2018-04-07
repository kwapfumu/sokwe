import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addPlayedSokozoIdSucessReducer(currentUserState, payload) {
  // sets isSaving: false and currentUser to the received one
  const newCurrentUserState = update(currentUserState, { $merge: payload });
  return newCurrentUserState;
}
