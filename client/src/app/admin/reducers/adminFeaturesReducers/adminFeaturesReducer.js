import { combineReducers } from 'redux';
import fetchIbisokozoReducer from './fetchIbisokozoReducers/fetchIbisokozoReducer';
import fetchUsersReducer from './fetchUsersReducers/fetchUsersReducer';
import igisokozoReducer from './igisokozoReducers/igisokozoReducer';
import userReducer from './userReducers/userReducer';

const adminFeaturesReducer = combineReducers({
  fetchIbisokozoReducer: fetchIbisokozoReducer,
  fetchUsersReducer: fetchUsersReducer,
  igisokozoReducer: igisokozoReducer,
  userReducer: userReducer,
});

export default adminFeaturesReducer;
