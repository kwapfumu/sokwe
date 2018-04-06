import { FETCH_IBISOKOZO_SUCCESS } from '../../../constants/constants';

export default function receivedIbisokozo(json) {
  return {
    type: FETCH_IBISOKOZO_SUCCESS,
    payload: {
      isFetching: false,
      ibisokozo: json.data.children.map((child) => child.data),
      // receivedAt: Date.now(),
    },
  };
}
