import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function getCurrentUserErrorReducer(currentUserState, payload) {
  // sets isFetching: false
  // eslint-disable-next-line max-len
  const newCurrentUserState = update(currentUserState, { isFetching: { $set: payload.isFetching } });
  return newCurrentUserState;
}
