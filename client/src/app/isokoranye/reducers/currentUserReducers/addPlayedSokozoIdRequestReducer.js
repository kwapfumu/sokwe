import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addPlayedSokozoIdRequestReducer(currentUserState, payload) {
  // sets isSaving: true
  // eslint-disable-next-line max-len
  const newCurrentUserState = update(currentUserState, { isSaving: { $set: payload.isSaving } });
  return newCurrentUserState;
}
