import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchUsersErrorReducer(fetchUsersState, payload) {
  // sets isFetching: false
  const newFetchUsersState = update(fetchUsersState, { $merge: payload });
  return newFetchUsersState;
}
