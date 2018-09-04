import { FETCH_IBISOKOZO } from '../../../client/src/app/constants/constants';
import requestIbisokozo from '../../../client/src/app/isokoranye/actions/ibisokozoActionsCreators/requestIbisokozo';

describe('test requestIbisokozo action creator', () => {
  it('should create an action to request Ibisokozo', () => {
    const expectedAction = {
      type: FETCH_IBISOKOZO,
      payload: {
        isFetching: true,
      },
    };
    expect(requestIbisokozo()).toEqual(expectedAction);
  });
});
