import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function addPlayedSokozoIdRequestReducer(currentUserState, action) {
  // sets isSaving: true
  // eslint-disable-next-line max-len
  const newCurrentUserState = update(currentUserState, { isSaving: { $set: action.payload.isSaving } });
  return newCurrentUserState;
}
