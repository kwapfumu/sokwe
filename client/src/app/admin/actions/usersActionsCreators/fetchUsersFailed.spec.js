import { FETCH_USERS_ERROR } from '../../../constants/constants';
import fetchUsersFailed from './fetchUsersFailed';

describe('test fetchUsersFailed action creator', () => {
  it('should create an action to acknowledge that fetch Users failed', () => {
    const expectedAction = {
      type: FETCH_USERS_ERROR,
      payload: {
        isFetching: false,
      },
    };
    // eslint-disable-next-line no-undef
    expect(fetchUsersFailed()).toEqual(expectedAction);
  });
});
