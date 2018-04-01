import { combineReducers } from 'redux';
import fetchIbisokozoReducer from './fetchIbisokozoReducers/fetchIbisokozoReducer';
import fetchIgisokozoByIdReducer from './fetchIgisokozoByIdReducers/fetchIgisokozoByIdReducer';
import fetchUsersReducer from './fetchUsersReducers/fetchUsersReducer';
import igisokozoReducer from './igisokozoReducers/igisokozoReducer';
import userReducer from './userReducers/userReducer';

const adminFeaturesReducer = combineReducers({
  fetchIbisokozoReducer: fetchIbisokozoReducer,
  fetchIgisokozoByIdReducer: fetchIgisokozoByIdReducer,
  fetchUsersReducer: fetchUsersReducer,
  igisokozoReducer: igisokozoReducer,
  userReducer: userReducer,
});

export default adminFeaturesReducer;
