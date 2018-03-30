import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
const getIgisokozoSuccessReducer = function getIgisokozoSuccessReducer(getIgisokozoState, action) {
  // sets isLoading: false and aSokozo to the received one
  const newgetIgisokozoState = update(getIgisokozoState, { $merge: action.payload });
  return newgetIgisokozoState;
};

export default getIgisokozoSuccessReducer;
