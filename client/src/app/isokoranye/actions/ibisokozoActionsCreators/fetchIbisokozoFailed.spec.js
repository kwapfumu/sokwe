import { FETCH_IBISOKOZO_ERROR } from '../../../constants/constants';
import fetchIbisokozoFailed from './fetchIbisokozoFailed';

describe('test fetchIbisokozoFailed action creator', () => {
  it('should create an action to acknowledge that fetch Ibisokozo failed', () => {
    const expectedAction = {
      type: FETCH_IBISOKOZO_ERROR,
      payload: {
        isFetching: false,
      },
    };
    // eslint-disable-next-line no-undef
    expect(fetchIbisokozoFailed()).toEqual(expectedAction);
  });
});
