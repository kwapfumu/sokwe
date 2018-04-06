import addIgisokozoRequestReducer from './addIgisokozoRequestReducer';
import addIgisokozoSuccessReducer from './addIgisokozoSuccessReducer';
import addIgisokozoFailedReducer from './addIgisokozoFailedReducer';

// slice reducer
export default function addIgisokozoReducer(state = {
  isSaving: false,
  ibisokozo: [],
}, action) {
  switch (action.type) {
  case 'ADD_IGISOKOZO_REQUEST': return addIgisokozoRequestReducer(state, action.payload);
  case 'ADD_IGISOKOZO_SUCCESS': return addIgisokozoSuccessReducer(state, action.payload);
  case 'ADD_IGISOKOZO_ERROR': return addIgisokozoFailedReducer(state, action.payload);
  default: return state;
  }
}
