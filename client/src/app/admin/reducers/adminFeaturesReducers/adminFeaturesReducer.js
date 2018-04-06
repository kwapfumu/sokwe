import { combineReducers } from 'redux';
import fetchIgisokozoByIdReducer from './fetchIgisokozoByIdReducers/fetchIgisokozoByIdReducer';
import fetchUsersReducer from './fetchUsersReducers/fetchUsersReducer';
import igisokozoReducer from './igisokozoReducers/igisokozoReducer';
import userReducer from './userReducers/userReducer';

const adminFeaturesReducer = combineReducers({
  users: fetchUsersReducer,
  aSokozo2Edit: fetchIgisokozoByIdReducer,
  igisokozo: igisokozoReducer,
  user: userReducer,
});

export default adminFeaturesReducer;
