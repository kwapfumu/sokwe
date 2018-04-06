import { FETCH_USERS_REQUEST } from '../../../constants/constants';

export default function requestUsers() {
  return {
    type: FETCH_USERS_REQUEST,
    payload: {
      isFetching: true,
    },
  };
}
