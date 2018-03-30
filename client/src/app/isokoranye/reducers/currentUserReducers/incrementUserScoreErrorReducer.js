import update from 'immutability-helper';
import 'babel-polyfill';

// Case reducer
export default function incrementUserScoreErrorReducer(currentUserState, action) {
  // sets isSaving: false
  // eslint-disable-next-line max-len
  const newCurrentUserState = update(currentUserState, { isSaving: { $set: action.payload.isSaving } });
  return newCurrentUserState;
}
