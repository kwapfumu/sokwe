import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function incrementUserScoreRequestReducer(currentUserState, payload) {
  // sets isSaving: true
  // eslint-disable-next-line max-len
  const newCurrentUserState = update(currentUserState, { isSaving: { $set: payload.isSaving } });
  return newCurrentUserState;
}
