import { FETCH_IBISOKOZO } from '../../../constants/constants';

// ActionCreators are functions that create actions
export default function requestIbisokozo() {
  return {
    type: FETCH_IBISOKOZO,
    payload: {
      isFetching: true,
    },
  };
}
