import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

// ActionCreators are functions that create actions
function requestIbisokozo() {
  return {
    type: types.FETCH_IBISOKOZO,
    payload: {
      isFetching: true,
      didInvalidate: false,
    },
  };
}

function receivedIbisokozo(json) {
  return {
    type: types.FETCH_IBISOKOZO_SUCCESS,
    payload: {
      isFetching: false,
      ibisokozo: json.data.children.map((child) => child.data),
      // receivedAt: Date.now(),
    },
  };
}

function fetchIbisokozoFailed() {
  return {
    type: types.FETCH_IBISOKOZO_ERROR,
    payload: {
      isFetching: false,
      didInvalidate: true,
    },
  };
}
/** Redux Thunk middleware allows you to write action creators that return a
* function instead of an action. The thunk can be used to delay the dispatch
* of an action, or to dispatch only if a certain condition is met.
* The inner function receives the store methods 'dispatch' and 'getState' as * parameters. */
/** forces the action creator to hold off on actually dispatching the action
* object to the reducers until dispatch is called. */
/** The thunk middleware knows how to turn thunk async actions into actions,
* so you just have to have your simple_action() to be a thunk and the
* thunk middleware will do the job for you, if the middleware see a normal action,
* he will dispatch this action as normal action but if it's an async function
* it will turn your async action/function into normal action. */
function fetchIbisokozo() {
  // returns a function(that accepts `dispatch` so we can dispatch later)
  // instead of an action
  return (dispatch) => {
    dispatch(requestIbisokozo());
    return fetch(`${api.API_URL}/admin/ibisokozo`, { headers: api.API_HEADERS })
      .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => dispatch(receivedIbisokozo(json)))
      .catch((error) => {
        dispatch(fetchIbisokozoFailed());
        // eslint-disable-next-line no-console
        console.log('Error fetching data', error);
      });
  };
}
// eslint-disable-next-line object-shorthand
export default { fetchIbisokozo };
