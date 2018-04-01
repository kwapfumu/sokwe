import { fetchIgisokozoByIdRequestReducer } from './fetchIgisokozoByIdRequestReducer';
import { fetchIgisokozoByIdSuccessReducer } from './fetchIgisokozoByIdSuccessReducer';
import { fetchIgisokozoByIdErrorReducer } from './fetchIgisokozoByIdErrorReducer';

// slice reducer
export default function fetchIgisokozoByIdReducer(fetchIgisokozoByIdState = {
  isFetching: false,
  aSokozo2Edit: {},
}, action) {
  switch (action.type) {
  case 'GET_IGISOKOZO_BYID': return fetchIgisokozoByIdRequestReducer(fetchIgisokozoByIdState, action);
  case 'GET_IGISOKOZO_BYID_SUCCESS': return fetchIgisokozoByIdSuccessReducer(fetchIgisokozoByIdState, action);
  case 'GET_IGISOKOZO_BYID_ERROR': return fetchIgisokozoByIdErrorReducer(fetchIgisokozoByIdState, action);
  default: return fetchIgisokozoByIdReducer;
  }
}
