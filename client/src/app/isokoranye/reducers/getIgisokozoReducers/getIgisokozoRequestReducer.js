import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
const getIgisokozoRequestReducer = function getIgisokozoRequestReducer(getIgisokozoState, action) {
  // sets isLoading: true
  // eslint-disable-next-line max-len
  const newgetIgisokozoState = update(getIgisokozoState, { isLoading: { $set: action.payload.isLoading } });
  return newgetIgisokozoState;
};

export default getIgisokozoRequestReducer;
