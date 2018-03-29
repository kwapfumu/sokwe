import { addIgisokozoRequestReducer } from './addIgisokozoRequestReducer';
import { addIgisokozoSuccessReducer } from './addIgisokozoSuccessReducer';
import { addIgisokozoFailedReducer } from './addIgisokozoFailedReducer';

// slice reducer
export default function addIgisokozoReducer(ibisokozoState = {
  isSaving: false,
  ibisokozo: ibisokozo,
}, action) {
  switch (action.type) {
  case 'ADD_IGISOKOZO_REQUEST': return addIgisokozoRequestReducer(ibisokozoState, action);
  case 'ADD_IGISOKOZO_SUCCESS': return addIgisokozoSuccessReducer(ibisokozoState, action);
  case 'ADD_IGISOKOZO_ERROR': return addIgisokozoFailedReducer(ibisokozoState, action);
  default: return ibisokozoState;
  }
}
