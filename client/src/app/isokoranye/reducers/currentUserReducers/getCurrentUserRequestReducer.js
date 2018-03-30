import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function getCurrentUserRequestReducer(currentUserState, action) {
  // sets isFetching: true
  // eslint-disable-next-line
  const newCurrentUserState = update(currentUserState, { isFetching: { $set: action.payload.isFetching } });
  return newCurrentUserState;
}
