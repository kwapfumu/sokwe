import fetch from 'isomorphic-fetch';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../../reusableFunctions/fetchResponseHandler/fetchResponseHandlerFctr';

const checkRole
export default function loginByEmail(anEmail) {
  return fetch(`${api.API_URL}/:userMail`, {headers:api.API_HEADERS})
      .then(fetchResponseHandlerFctr.checkHttpErrorStatus(response))
      .then((response) => response.json())
      .then((json) => dispatch(this.receivedCurrentUser(json)))
      .catch((error) => {
        dispatch(this.getCurrentUserFailed());
        console.log('Error fetching data', error);
      });
};
}
