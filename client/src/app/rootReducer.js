import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { adminFeaturesReducer } from
// './admin/reducers/adminFeaturesReducers/adminFeaturesReducer';
// import isokoranyeReducer from './isokoranye/reducers/isokoranyeReducer';

/* First and foremost, it's important to understand that your entire application really only has one
* single reducer function: the function that you've passed into createStore as the first argument.
* That one single reducer function ultimately needs to do several things:
* - The first time the reducer is called, the state value will be undefined. The reducer needs
*   to handle this case by supplying a default state value before handling the incoming action.
* - It needs to look at the previous state and the dispatched action, and determine what kind of
*   work needs to be done
* - Assuming actual changes need to occur, it needs to create new objects and arrays with the
*   updated data and return those
* - If no changes are needed, it should return the existing state as-is. */
const rootReducer = combineReducers({
  // adminFeaturesReducer: adminFeaturesReducer,
  // isokoranyeReducer: isokoranyeReducer,
  form: formReducer,
});

export default rootReducer;
