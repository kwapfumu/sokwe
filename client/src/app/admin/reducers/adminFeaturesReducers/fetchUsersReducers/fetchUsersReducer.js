import fetchUsersRequestReducer from './fetchUsersRequestReducer';
import fetchUsersSuccessReducer from './fetchUsersSuccessReducer';
import fetchUsersErrorReducer from './fetchUsersErrorReducer';

// slice reducer
export default function fetchUsersReducer(state = {
  isFetching: false,
  users: [],
}, action) {
  switch (action.type) {
  case 'FETCH_USERS_REQUEST': return fetchUsersRequestReducer(state, action.payload);
  case 'FETCH_USERS_SUCCESS': return fetchUsersSuccessReducer(state, action.payload);
  case 'FETCH_USERS_ERROR': return fetchUsersErrorReducer(state, action.payload);
  default: return state;
  }
}
