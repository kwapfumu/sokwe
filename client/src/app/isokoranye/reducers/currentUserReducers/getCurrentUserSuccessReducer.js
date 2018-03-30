import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function getCurrentUserSuccessReducer(currentUserState, action) {
  // sets isFetching: false and currentUser to the received one
  const newCurrentUserState = update(currentUserState, { $merge: action.payload });
  return newCurrentUserState;
}
