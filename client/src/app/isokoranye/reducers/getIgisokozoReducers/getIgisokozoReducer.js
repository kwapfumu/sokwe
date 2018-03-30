import getIgisokozoRequestReducer from './getIgisokozoRequestReducer';
import getIgisokozoSuccessReducer from './getIgisokozoSuccessReducer';
import getIgisokozoErrorReducer from './getIgisokozoErrorReducer';

// slice reducer: a reducer that is being used to handle updates to one specific slice of the
// state tree
const getIgisokozoReducer = function getIgisokozoReducer(getIgisokozoState = {
  isLoading: false,
  aSokozo: {},
}, action) {
  switch (action.type) {
  case 'GET_IGISOKOZO': return getIgisokozoRequestReducer(getIgisokozoState, action);
  case 'GET_IGISOKOZO_SUCCESS': return getIgisokozoSuccessReducer(getIgisokozoState, action);
  case 'GET_IGISOKOZO_ERROR': return getIgisokozoErrorReducer(getIgisokozoState, action);
  default: return getIgisokozoState;
  }
};

export default getIgisokozoReducer;
