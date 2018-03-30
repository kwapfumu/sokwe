import 'babel-polyfill';
import update from 'immutability-helper';

// Case reducer
const getIgisokozoErrorReducer = function getIgisokozoErrorReducer(getIgisokozoState, action) {
  // sets isLoading: false and aSokozo to the received one
  // eslint-disable-next-line max-len
  const newgetIgisokozoState = update(getIgisokozoState, { isLoading: { $set: action.payload.isLoading } });
  return newgetIgisokozoState;
};

export default getIgisokozoErrorReducer;
