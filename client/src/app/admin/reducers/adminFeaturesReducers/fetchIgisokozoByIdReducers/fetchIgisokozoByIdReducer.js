import fetchIgisokozoByIdRequestReducer from './fetchIgisokozoByIdRequestReducer';
import fetchIgisokozoByIdSuccessReducer from './fetchIgisokozoByIdSuccessReducer';
import fetchIgisokozoByIdErrorReducer from './fetchIgisokozoByIdErrorReducer';

// slice reducer
export default function fetchIgisokozoByIdReducer(state = {
  isFetching: false,
  aSokozo2Edit: {},
}, action) {
  switch (action.type) {
  case 'GET_IGISOKOZO_BYID': return fetchIgisokozoByIdRequestReducer(state, action.payload);
  case 'GET_IGISOKOZO_BYID_SUCCESS': return fetchIgisokozoByIdSuccessReducer(state, action.payload);
  case 'GET_IGISOKOZO_BYID_ERROR': return fetchIgisokozoByIdErrorReducer(state, action.payload);
  default: return state;
  }
}
