import fetchIbisokozoRequestReducer from './fetchIbisokozoRequestReducer';
import fetchIbisokozoSuccessReducer from './fetchIbisokozoSuccessReducer';
import fetchIbisokozoErrorReducer from './fetchIbisokozoErrorReducer';

// slice reducer
export default function fetchIbisokozoReducer(state = {
  isFetching: false,
  ibisokozo: [],
}, action) {
  switch (action.type) {
  case 'FETCH_IBISOKOZO': return fetchIbisokozoRequestReducer(state, action.payload);
  case 'FETCH_IBISOKOZO_SUCCESS': return fetchIbisokozoSuccessReducer(state, action.payload);
  case 'FETCH_IBISOKOZO_ERROR': return fetchIbisokozoErrorReducer(state, action.payload);
  default: return state;
  }
}
