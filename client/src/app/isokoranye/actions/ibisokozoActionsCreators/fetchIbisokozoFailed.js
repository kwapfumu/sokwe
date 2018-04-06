import { FETCH_IBISOKOZO_ERROR } from '../../../constants/constants';

export default function fetchIbisokozoFailed() {
  return {
    type: FETCH_IBISOKOZO_ERROR,
    payload: {
      isFetching: false,
    },
  };
}
