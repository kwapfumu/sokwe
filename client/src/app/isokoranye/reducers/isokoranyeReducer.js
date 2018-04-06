import { combineReducers } from 'redux';
import getIgisokozoReducer from './getIgisokozoReducers/getIgisokozoReducer';
import fetchIbisokozoReducer from './fetchIbisokozoReducers/fetchIbisokozoReducer';
import currentUserReducer from './currentUserReducers/currentUserReducer';
import addIgisokozoReducer from './addIgisokozoReducers/addIgisokozoReducer';

const isokoranyeReducer = combineReducers({
  getIgisokozoReducer: getIgisokozoReducer,
  ibisokozo: fetchIbisokozoReducer,
  currentUserReducer: currentUserReducer,
  addIgisokozoReducer: addIgisokozoReducer,
});

export default isokoranyeReducer;
