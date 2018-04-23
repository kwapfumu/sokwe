import fetchValentinasMsgsRequestReducer from './fetchValentinasMsgsRequestReducer';
import fetchValentinasMsgsSuccessReducer from './fetchValentinasMsgsSuccessReducer';
import fetchValentinasMsgsErrorReducer from './fetchValentinasMsgsErrorReducer';

// slice reducer
export default function fetchValentinasMsgsReducer(state = {
  isFetching: false,
  valentinaMsgs: [],
}, action) {
  switch (action.type) {
  case 'FETCH_VALENTINASMSGS': return fetchValentinasMsgsRequestReducer(state, action.payload);
  case 'FETCH_VALENTINASMSGS_SUCCESS': return fetchValentinasMsgsSuccessReducer(state, action.payload);
  case 'FETCH_VALENTINASMSGS_ERROR': return fetchValentinasMsgsErrorReducer(state, action.payload);
  default: return state;
  }
}
