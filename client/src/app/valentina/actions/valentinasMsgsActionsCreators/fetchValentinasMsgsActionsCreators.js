import fetch from 'isomorphic-fetch';
import { FETCH_VALENTINASMSGS, FETCH_VALENTINASMSGS_SUCCESS, FETCH_VALENTINASMSGS_ERROR } from '../../../constants/constants';
import { API_URL, API_HEADERS } from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';


const requestValentinasMsgs = function requestValentinasMsgs() {
  return {
    type: FETCH_VALENTINASMSGS,
    payload: {
      isFetching: true,
    },
  };
};

const receivedValentinasMsgs = function receivedValentinasMsgs(json) {
  return {
    type: FETCH_VALENTINASMSGS_SUCCESS,
    payload: {
      isFetching: false,
      valentinaMsgs: json.data.children.map((child) => child.data),
      // receivedAt: Date.now(),
    },
  };
};
const fetchValentinasMsgsFailed = function fetchValentinasMsgsFailed() {
  return {
    type: FETCH_VALENTINASMSGS_ERROR,
    payload: {
      isFetching: false,
    },
  };
};

export default function fetchValentinasMsgs() {
  // returns a function(that accepts `dispatch` so we can dispatch later)
  // instead of an action
  return (dispatch) => {
    dispatch(requestValentinasMsgs());
    return fetch(`${API_URL}/valentina/`, { headers: API_HEADERS })
      .then((response) => fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => dispatch(receivedValentinasMsgs(json)))
      .catch((error) => {
        dispatch(fetchValentinasMsgsFailed());
        // eslint-disable-next-line no-console
        console.log('Error fetching ValentinasMsgs', error);
      });
  };
}
