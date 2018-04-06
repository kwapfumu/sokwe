import addIgisokozoRequestReducer from '../../../../isokoranye/reducers/addIgisokozoReducers/addIgisokozoRequestReducer';
import addIgisokozoSuccessReducer from '../../../../isokoranye/reducers/addIgisokozoReducers/addIgisokozoSuccessReducer';
import addIgisokozoFailedReducer from '../../../../isokoranye/reducers/addIgisokozoReducers/addIgisokozoFailedReducer';
import editIgisokozoRequestReducer from './editIgisokozoRequestReducer';
import editIgisokozoSuccessReducer from './editIgisokozoSuccessReducer';
import editIgisokozoFailedReducer from './editIgisokozoFailedReducer';
import deleteIgisokozoRequestReducer from './deleteIgisokozoRequestReducer';
import deleteIgisokozoSuccessReducer from './deleteIgisokozoSuccessReducer';
import deleteIgisokozoErrorReducer from './deleteIgisokozoErrorReducer';

// slice reducer: a reducer that is being used to handle updates to one specific slice of the state
// tree

export default function igisokozoReducer(state = {
  isDeleting: false,
  isSaving: false,
  isUpdating: false,
  ibisokozo: [],
}, action) {
  switch (action.type) {
  case 'ADD_IGISOKOZO_REQUEST': return addIgisokozoRequestReducer(state, action.payload);
  case 'ADD_IGISOKOZO_SUCCESS': return addIgisokozoSuccessReducer(state, action.payload);
  case 'ADD_IGISOKOZO_ERROR': return addIgisokozoFailedReducer(state, action.payload);
  case 'UPDATE_IGISOKOZO_REQUEST': return editIgisokozoRequestReducer(state, action.payload);
  case 'UPDATE_IGISOKOZO_SUCCESS': return editIgisokozoSuccessReducer(state, action.payload);
  case 'UPDATE_IGISOKOZO_ERROR': return editIgisokozoFailedReducer(state, action.payload);
  case 'DELETE_IGISOKOZO_REQUEST': return deleteIgisokozoRequestReducer(state, action.payload);
  case 'DELETE_IGISOKOZO_SUCCESS': return deleteIgisokozoSuccessReducer(state, action.payload);
  case 'DELETE_IGISOKOZO_ERROR': return deleteIgisokozoErrorReducer(state, action.payload);
  default: return state;
  }
}
