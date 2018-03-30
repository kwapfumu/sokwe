import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addPlayedSokozoIdSucessReducer(currentUserState, action) {
  // sets isSaving: false and currentUser to the received one
  const newCurrentUserState = update(currentUserState, { $merge: action.payload });
  return newCurrentUserState;
}
