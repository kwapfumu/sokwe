import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function getCurrentUserErrorReducer(currentUserState, action) {
  // sets isFetching: false
  // eslint-disable-next-line max-len
  const newCurrentUserState = update(currentUserState, { isFetching: { $set: action.payload.isFetching } });
  return newCurrentUserState;
}
