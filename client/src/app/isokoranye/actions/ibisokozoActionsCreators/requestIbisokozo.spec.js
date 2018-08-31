import { FETCH_IBISOKOZO } from '../../../constants/constants';
import requestIbisokozo from './requestIbisokozo';

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
