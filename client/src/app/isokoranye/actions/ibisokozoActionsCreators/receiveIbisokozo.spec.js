import { FETCH_IBISOKOZO_SUCCESS } from '../../../constants/constants';
import receivedIbisokozo from './receivedIbisokozo';

describe('test receivedIbisokozo action creator', () => {
  it('should create an action to acknowledge that Ibisokozo was received', () => {
    const expectedAction = {
      type: FETCH_IBISOKOZO_SUCCESS,
      payload: {
        isFetching: false,
        // eslint-disable-next-line no-undef
        ibisokozo: json.data.children.map((child) => child.data),
        // receivedAt: Date.now(),
      },
    };
    // eslint-disable-next-line no-undef
    expect(receivedIbisokozo(json)).toEqual(expectedAction);
  });
});
