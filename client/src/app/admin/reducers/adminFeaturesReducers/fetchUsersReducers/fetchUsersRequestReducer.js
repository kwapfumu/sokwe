import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function fetchUsersRequestReducer(fetchUsersState, payload) {
  // sets isFetching: true,didInvalidate: false
  const newFetchUsersState = update(fetchUsersState, { $merge: payload });
  return newFetchUsersState;
}
