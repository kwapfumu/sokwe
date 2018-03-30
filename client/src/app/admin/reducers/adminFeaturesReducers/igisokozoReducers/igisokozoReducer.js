import { addIgisokozoRequestReducer } from '../../../../isokoranye/reducers/addIgisokozoReducers/addIgisokozoRequestReducer';
import { addIgisokozoSuccessReducer } from '../../../../isokoranye/reducers/addIgisokozoReducers/addIgisokozoSuccessReducer';
import { addIgisokozoFailedReducer } from '../../../../isokoranye/reducers/addIgisokozoReducers/addIgisokozoFailedReducer';
import { editIgisokozoRequestReducer } from './editIgisokozoRequestReducer';
import { editIgisokozoSuccessReducer } from './editIgisokozoSuccessReducer';
import { editIgisokozoFailedReducer } from './editIgisokozoFailedReducer';
import { deleteIgisokozoRequestReducer } from './deleteIgisokozoRequestReducer';
import { deleteIgisokozoSuccessReducer } from './deleteIgisokozoSuccessReducer';
import { deleteIgisokozoErrorReducer } from './deleteIgisokozoErrorReducer';

// slice reducer: a reducer that is being used to handle updates to one specific slice of the state
// tree

export default function igisokozoReducer(ibisokozoState = {
  isSaving: false,
  ibisokozo: [],
}, action) {
  switch (action.type) {
  case 'ADD_IGISOKOZO_REQUEST': return addIgisokozoRequestReducer(ibisokozoState, action);
  case 'ADD_IGISOKOZO_SUCCESS': return addIgisokozoSuccessReducer(ibisokozoState, action);
  case 'ADD_IGISOKOZO_ERROR': return addIgisokozoFailedReducer(ibisokozoState, action);
  case 'UPDATE_IGISOKOZO_REQUEST': return editIgisokozoRequestReducer(ibisokozoState, action);
  case 'UPDATE_IGISOKOZO_SUCCESS': return editIgisokozoSuccessReducer(ibisokozoState, action);
  case 'UPDATE_IGISOKOZO_ERROR': return editIgisokozoFailedReducer(ibisokozoState, action);
  case 'DELETE_IGISOKOZO_REQUEST': return deleteIgisokozoRequestReducer(ibisokozoState, action);
  case 'DELETE_IGISOKOZO_SUCCESS': return deleteIgisokozoSuccessReducer(ibisokozoState, action);
  case 'DELETE_IGISOKOZO_ERROR': return deleteIgisokozoErrorReducer(ibisokozoState, action);
  default: return ibisokozoState;
  }
}
