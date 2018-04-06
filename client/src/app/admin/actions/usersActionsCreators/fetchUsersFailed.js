import { FETCH_USERS_ERROR } from '../../../constants/constants';

export default function fetchUsersFailed() {
  return {
    type: FETCH_USERS_ERROR,
    payload: {
      isFetching: false,
    },
  };
}
