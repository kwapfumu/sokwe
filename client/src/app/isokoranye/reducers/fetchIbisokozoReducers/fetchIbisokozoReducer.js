import { fetchIbisokozoRequestReducer } from './fetchIbisokozoRequestReducer';
import { fetchIbisokozoSuccessReducer } from './fetchIbisokozoSuccessReducer';
import { fetchIbisokozoErrorReducer } from './fetchIbisokozoErrorReducer';

// slice reducer
export default function fetchIbisokozoReducer(fetchIbisokozoState = {
  isFetching: false,
  didInvalidate: false,
  ibisokozo: [],
}, action) {
  switch (action.type) {
  case 'FETCH_IBISOKOZO': return fetchIbisokozoRequestReducer(fetchIbisokozoState, action);
  case 'FETCH_IBISOKOZO_SUCCESS': return fetchIbisokozoSuccessReducer(fetchIbisokozoState, action);
  case 'FETCH_IBISOKOZO_ERROR': return fetchIbisokozoErrorReducer(fetchIbisokozoState, action);
  default: return fetchIbisokozoState;
  }
}
