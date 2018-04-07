import getCurrentUserRequestReducer from './getCurrentUserRequestReducer';
import getCurrentUserSuccessReducer from './getCurrentUserSuccessReducer';
import getCurrentUserErrorReducer from './getCurrentUserErrorReducer';
import incrementUserIbisokozoAddedRequestReducer from './incrementUserIbisokozoAddedRequestReducer';
import incrementUserIbisokozoAddedSuccessReducer from './incrementUserIbisokozoAddedSuccessReducer';
import incrementUserIbisokozoAddedErrorReducer from './incrementUserIbisokozoAddedErrorReducer';
import incrementUserScoreRequestReducer from './incrementUserScoreRequestReducer';
import incrementUserScoreSuccessReducer from './incrementUserScoreSuccessReducer';
import incrementUserScoreErrorReducer from './incrementUserScoreErrorReducer';
import addIgisokozoRequestReducer from './addIgisokozoRequestReducer';
import addIgisokozoSucessReducer from './addIgisokozoSucessReducer';
import addIgisokozoFailedReducer from './addIgisokozoFailedReducer';
import addPlayedSokozoIdRequestReducer from './addPlayedSokozoIdRequestReducer';
import addPlayedSokozoIdSucessReducer from './addPlayedSokozoIdSucessReducer';
import addPlayedSokozoIdFailedReducer from './addPlayedSokozoIdFailedReducer';

/* slice reducer: a reducer that is being used to handle updates to one specific slice of
* the state tree */

// currentUser:{
// _id:ObjectID("12edf58r9d5gfyt6ggfes92d3"),
// username:"blahblahjkjk",
// email:"blahblahkooin",
// password:"blahblahjiji",
// lastAddedSokozo: {
// _id:ObjectID("12edf58r9d5gfyt6ggfes92d1"),
// igisokozo:"blahblah",
// inyishu:"reblablah"
// },
// numberOfSokozoAdded:0,
// playedSokozosIds:[
// {_id:ObjectID("22edf51r9d4gfyt3ggfes92d1")},
// {_id:ObjectID("52edf57r9d7gfyt9ggfes92d1")},
// {_id:ObjectID("12edf58r9d9gfyt1ggfes92d0")},
// ],
// scores:[
// {
// gameId:1,
// date:"",
// score:0,
// },
// {
// gameId:2,
// date:"",
// score:0,
// },
// ],
// }
export default function currentUserReducer(state = {
  isSaving: false,
  isFetching: false,
  currentUser: {},
}, action) {
  switch (action.type) {
  case 'ADD_IGISOKOZO_REQUEST': return addIgisokozoRequestReducer(state, action.payload);
  case 'ADD_IGISOKOZO_SUCCESS': return addIgisokozoSucessReducer(state, action.payload);
  case 'ADD_IGISOKOZO_ERROR': return addIgisokozoFailedReducer(state, action.payload);
  case 'ADD_PLAYEDSOKOZO_ID_REQUEST': return addPlayedSokozoIdRequestReducer(state, action.payload);
  case 'ADD_PLAYEDSOKOZO_ID_SUCCESS': return addPlayedSokozoIdSucessReducer(state, action.payload);
  case 'ADD_PLAYEDSOKOZO_ID_ERROR': return addPlayedSokozoIdFailedReducer(state, action.payload);
  case 'GET_CURRENT_USER': return getCurrentUserRequestReducer(state, action.payload);
  case 'GET_CURRENT_USER_SUCCESS': return getCurrentUserSuccessReducer(state, action.payload);
  case 'GET_CURRENT_USER_ERROR': return getCurrentUserErrorReducer(state, action.payload);
  case 'INCREMENT_USER_IBISOKOZOADDED_REQUEST': return incrementUserIbisokozoAddedRequestReducer(state, action.payload);
  case 'INCREMENT_USER_IBISOKOZOADDED__SUCCESS': return incrementUserIbisokozoAddedSuccessReducer(state, action.payload);
  case 'INCREMENT_USER_IBISOKOZOADDED_ERROR': return incrementUserIbisokozoAddedErrorReducer(state, action.payload);
  case 'INCREMENT_USER_SCORE_REQUEST': return incrementUserScoreRequestReducer(state, action.payload);
  case 'INCREMENT_USER_SCORE__SUCCESS': return incrementUserScoreSuccessReducer(state, action.payload);
  case 'INCREMENT_USER_SCORE_ERROR': return incrementUserScoreErrorReducer(state, action.payload);
  default: return state;
  }
}
