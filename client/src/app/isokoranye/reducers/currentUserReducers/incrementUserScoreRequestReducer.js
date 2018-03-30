import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
export default function incrementUserScoreRequestReducer(currentUserState, action) {
  // sets isSaving: true
  // eslint-disable-next-line max-len
  const newCurrentUserState = update(currentUserState, { isSaving: { $set: action.payload.isSaving } });
  return newCurrentUserState;
}
