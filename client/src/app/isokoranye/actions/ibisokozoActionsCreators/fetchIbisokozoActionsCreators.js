import fetch from 'isomorphic-fetch';
import requestIbisokozo from './requestIbisokozo';
import { API_URL, API_HEADERS } from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';
import receivedIbisokozo from './receivedIbisokozo';
import fetchIbisokozoFailed from './fetchIbisokozoFailed';
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
export default function fetchIbisokozo() {
  // returns a function(that accepts `dispatch` so we can dispatch later)
  // instead of an action
  return (dispatch) => {
    dispatch(requestIbisokozo());
    return fetch(`${API_URL}/isokoranye`, { headers: API_HEADERS })
      .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => dispatch(receivedIbisokozo(json)))
      .catch((error) => {
        dispatch(fetchIbisokozoFailed());
        // eslint-disable-next-line no-console
        console.log('Error fetching ibisokozo', error);
      });
  };
}
