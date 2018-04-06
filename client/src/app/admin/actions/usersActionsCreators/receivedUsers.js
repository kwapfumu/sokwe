import { FETCH_USERS_SUCCESS } from '../../../constants/constants';

export default function receivedUsers(json) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: {
      isFetching: false,
      users: json.data.children.map((child) => child.data),
      // receivedAt: Date.now(),
    },
  };
}
