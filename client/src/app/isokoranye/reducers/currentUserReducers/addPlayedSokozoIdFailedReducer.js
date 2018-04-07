import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addPlayedSokozoIdFailedReducer(currentUserState, payload) {
  // sets isSaving: false
  // eslint-disable-next-line max-len
  const newCurrentUserState = update(currentUserState, { isSaving: { $set: payload.isSaving } });
  return newCurrentUserState;
}
