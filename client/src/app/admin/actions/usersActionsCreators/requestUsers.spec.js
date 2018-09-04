import { FETCH_USERS_REQUEST } from '../../../constants/constants';
import requestUsers from './requestUsers';

describe('test requestUsers action creator', () => {
  it('creates an action to requestUsers', () => {
    const expectedAction = {
      type: FETCH_USERS_REQUEST,
      payload: {
        isFetching: true,
      },
    };
    expect(requestUsers()).toEqual(expectedAction);
  });
});
