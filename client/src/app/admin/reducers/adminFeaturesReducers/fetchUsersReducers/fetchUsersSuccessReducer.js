import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function fetchUsersSuccessReducer(fetchUsersState, payload) {
  // sets isFetching: false, users: to received array
  const newFetchUsersState = update(fetchUsersState, { $merge: payload });
  return newFetchUsersState;
}
